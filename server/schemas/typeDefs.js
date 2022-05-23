//import the gql tagged template function
const { gql } = require('apollo-server-express');

// create out typeDefs for explicit schema types
const typeDefs = gql`
    type User {
    _id: ID
    username: String
    email: String
    aspiration: [Aspiration]
}
    type Aspiration {
        _id: ID
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
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        aspirations(username: String): [Aspiration]
        aspiration(_id: ID!): Aspiration
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addAspiration(title:String!,description: String!, categories:String!): Aspiration
       
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