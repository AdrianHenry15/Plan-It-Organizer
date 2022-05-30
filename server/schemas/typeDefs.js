//import the gql tagged template function
const { gql } = require("apollo-server-express");

// create out typeDefs for explicit schema types
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    folders: [Folder]
  }

  type Aspiration {
    _id: ID
    folderId: ID
    title: String
    description: String
    category: String
    createdAt: String
    date: String
    img: String
    priority: String
    genre: String
    focusPoint: String
    diet: String
    culture: String
    whatArticle: String
    username: String
  }

  type Folder {
    _id: ID
    title: String
    createdAt: String
    aspirations: [Aspiration]
    username: String
  }

  # must return token
  # optionally includes user data
  type Auth {
    token: ID!
    user: User
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

    addAspiration(
      folderId: ID!
      title: String!
      description: String!
      category: String!
      priority: String!
    ): Folder

    removeAspiration(_id: ID!, folderId: ID!): Folder

    updateAspiration(
      _id: ID!
      title: String
      description: String
      category: String
      date: String
      img: String
      priority: String
      genre: String
      focusPoint: String
      diet: String
      region: String
      whatArticle: String
    ): Aspiration

    addFolder(title: String!): Folder

    removeFolder(_id: ID!): User

    updateFolder(_id: ID!, title: String!): Folder
  }
`;

//export the typeDefs
module.exports = typeDefs;
