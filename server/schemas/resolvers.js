const { User, Aspiration, Folder } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth.js')

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('folders');

                return userData;
            }

            throw new AuthenticationError('Not logged in')
        },
        // get all aspirations
        aspirations: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Aspiration.find(params).sort({ createdAt: -1 });
        },
        // get single aspiration
        aspiration: async (parent, { _id }) => {
            return Aspiration.findOne({ _id });
        },
        // get all folders (homepage)
        folders: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Folder.find(params).sort({ createdAt: -1 });
        },
        // get single folder
        folder: async (parent, { _id }) => {
            await Folder.findOne({ _id: _id }).then(data => 
                {
                [...data.aspirations].forEach(element => {
                    Aspiration.findById(element).then(res => res);
                });
            }
            // console.log(data)
            );
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('folders');

        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('folders');
        }
    },
    Mutation: {
        // user sign up
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
                const aspiration = Aspiration.create({
                    title: args.title,
                    description: args.description,
                    category: args.category,
                    createdAt: args.createdAt,
                    date: args.date,
                    img: args.img,
                    priority: args.priority,
                    genre: args.genre,
                    focusPoint: args.focusPoint,
                    diet: args.diet,
                    culture: args.culture,
                    whatArticle: args.whatArticle
                });

                return aspiration.then(async data => {
                    await Folder.findByIdAndUpdate(args.folderId,
                        { $push: { aspirations: data._id } },
                    )
                    // output
                    Folder.findOne({ _id: args.folderId }).then(data => {
                        [...data.aspirations].forEach(element => {
                            Aspiration.findById(element).then(res => res);
                        })
                    });
                });
            }
                throw new AuthenticationError("Not logged in");
        },

        removeAspiration: async (parent, { _id, folderId }, context) => {
            if (context.user) {
                const aspiration = await Aspiration.findById({_id})

                // remove from folder aspirations array
                const updatedFolder = await Folder.findByIdAndUpdate(
                    { _id: folderId },
                    { $pull: { aspirations: {
                        _id: aspiration._id,
                        title: aspiration.title,
                        description: aspiration.description,
                        category: aspiration.category,
                        createdAt: aspiration.createdAt,
                        date: aspiration.date,
                        img: aspiration.img,
                        priority: aspiration.priority,
                        genre: aspiration.genre,
                        focusPoint: aspiration.focusPoint,
                        diet: aspiration.diet,
                        culture: aspiration.culture,
                        whatArticle: aspiration.whatArticle
                    } } },
                    { new: true }
                )
                // delete the aspiration
                await Aspiration.findByIdAndDelete({ _id });
                return updatedFolder;
            }
            throw new AuthenticationError('You need to be logged in!')
        },

        updateAspiration: async (parent, args, context) => {
            if (context.user) {
                // update all contents of aspiration
                const updatedAspiration = await Aspiration.findByIdAndUpdate(
                    { _id: args._id },
                    { ...args },
                    { new: true }
                );
                return updatedAspiration;
            }
            throw new AuthenticationError('You need to be logged in!')
        },

        addFolder: async (parent, { title }, context) => {
            // if user logged in
            if (context.user) {
                const folder = await Folder.create({ title, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { folders: folder } },
                    // to make sure new document is returned instead of updated document
                    { new: true }
                );
                return folder;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        removeFolder: async (parent, { _id }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: { folders: _id } },
                    { new: true }
                );

                // delete all aspirations inside the folder
                await Aspiration.deleteMany({ folderId: _id });
                // delete the folder
                await Folder.findByIdAndDelete({ _id });
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!')
        },

        updateFolder: async (parent, { title }, context) => {
            if (context.user) {
                // update all contents of folder
                const updatedFolder = await Folder.findByIdAndUpdate(
                    { _id: args._id },
                    { title },
                    { new: true }
                );
                return updatedFolder;
            }
            throw new AuthenticationError('You need to be logged in!')
        },
    },
};

module.exports = resolvers;