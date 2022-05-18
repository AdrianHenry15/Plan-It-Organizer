// import the gql tagged template function
const { gql } = require('apollo-server-express');


// create our typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    notes: [Note]
    friends: [User]
  }
type Note {
    _id: ID
    noteText: String
    createdAt: String
    commentCount: Int
    comments: [Comment]
  }
  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }
type Query {
    me:User
    users: [User]
    user(username: String!): User
    notes(username: String): [Note]
    note(_id: ID!): Note
  }  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addNote(noteText: String!): Note
    addComment(noteId: ID!, commentBody: String!): Note
    addFriend(friendId: ID!): User
  }
  type Auth {
    token: ID!
    user: User
  }`
  
  ;

// export the typeDefs
module.exports = typeDefs;
