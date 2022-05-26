//import the gql tagged template function
const { gql } = require('apollo-server-express');

// create out typeDefs for explicit schema types
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        aspirations: [Aspiration]
        folders: [Folder]
    }
    type Aspiration {
        _id: ID
        folderId: ID
        title: String
        description: String
        categories: String
        createdAt: String
        date: String
        img: String
        priority: String
        genre: String
        areaOfFocus: String
        diet: String
        region: String
        whatArticle: String
        isComplete: Boolean
    }
    type Folder {
        _id: ID
        title: String
        createdAt: String
        aspirations: [Aspiration]
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        aspirations(username: String): [Aspiration]
        aspiration(_id: ID!): Aspiration
        folders(username: String): [Folder]
        folder(_id: ID!): Folder
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addAspiration(title:String!,description: String!, categories:String!, folderId:ID!): Aspiration
        removeAspiration(aspirationId: ID!, folderId: ID!): User
        addFolder(title:String!): Folder
        removeFolder(folderId: ID!): User
    }
    
    # must return token
    # optionally includes user data
    type Auth {
        token: ID!
        user: User
    }
`;

//export the typeDefs
module.exports = typeDefs;