const { User, Aspiration } = require('../models')
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
        // get all aspiration
        aspirations: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Aspiration.find().sort({ createdAt: -1 });
        },
        // get single aspiration
        aspiration: async (parent, { _id }) => {
            return Aspiration.findOne({ _id });
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
                console.log(aspiration)
                return aspiration;
            }


        },

    }
};

module.exports = resolvers;