const { User, Aspiration } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({})
                    .select('-__v -password')
                    .populate('comments')
                    .populate('friends')

                return userData;
            }

            throw new AuthenticationError('Not logged in')
        },
        // get all comments
        aspiration: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Aspiration.find().sort({ createdAt: -1 });
        },
        // get single comment
        aspiration: async (parent, { _id }) => {
            return Aspiration.findOne({ _id });
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('friends')
                .populate('comments');

        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('friends')
                .populate('comments');
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
        // addReply: async (parent, { commentId, replyBody }, context) => {
        //     if (context.user) {
        //         const updatedComment = await Comment.findOneAndUpdate(
        //             { _id: commentId },
        //             { $push: { replies: { replyBody, username: context.user.username } } },
        //             { new: true, runValidators: true }
        //         );

        //         return updatedComment;
        //     }

        //     throw new AuthenticationError('You need to be logged in!')
        // },
        // addFriend: async (parent, { friendId }, context) => {
        //     if (context.user) {
        //         const updatedUser = await User.findOneAndUpdate(
        //             { _id: context.user._id },
        //             // add to set used so that there aren't duplications of friends
        //             { $addToSet: { friends: friendId } },
        //             { new: true }
        //         ).populate('friends')

        //         return updatedUser;
        //     }

        //     throw new AuthenticationError('You need to be logged in');
        // }
    }
};

module.exports = resolvers;