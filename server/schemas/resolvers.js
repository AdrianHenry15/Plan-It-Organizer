const { User, Aspiration, Folder } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                    .select('-__v -password')
                    .populate('aspirations')

                return userData;
            }

            throw new AuthenticationError('Not logged in')
        },
        // get all aspirations
        aspirations: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Aspiration.find().sort({ createdAt: -1 });
        },
        // get single aspiration
        aspiration: async (parent, { _id }) => {
            return Aspiration.findOne({ _id });
        },
        // get all folders (homepage)
        folders: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Folder.find().sort({ createdAt: -1 });
        },
        // get single folder
        folder: async (parent, { _id }) => {
            return Folder.findOne({ _id });
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('aspirations');

        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('aspirations');
        }
    },
    Mutation: {
        // User sign up
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        // user login 
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user);
            return { token, user };
        },
        addAspiration: async (parent, args, context) => {
            // if user logged in
            if (context.user) {
                const aspiration = await Aspiration.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { aspirations: aspiration._id } },
                    // to make sure new document is returned instead of updated document
                    { new: true }
                );
                return aspiration;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeAspiration: async (parent, { aspirationId }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { aspirations: { aspirationId } } },
                    { new: true }
                );

                await Aspiration.findByIdAndDelete({ aspirationId });
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
        addFolder: async (parent, args, context) => {
            // if user logged in
            if (context.user) {
                const folder = await Folder.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { folders: folder._id } },
                    // to make sure new document is returned instead of updated document
                    { new: true }
                );
                return folder;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeFolder: async (parent, { folderId }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { folders: { folderId } } },
                    { new: true }
                );

                await Folder.findByIdAndDelete({ folderId });
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
    },
};

module.exports = resolvers;