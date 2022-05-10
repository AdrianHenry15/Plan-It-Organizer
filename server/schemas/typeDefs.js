//import the gql tagged template function
const { gql } = require('apollo-server-express');

// create out typeDefs for explicit schema types
const typeDefs = gql`
    type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    comments: [Comment]
    friends: [User]

}
    type Comment {
        _id: ID
        commentText: String
        createdAt: String
        username: String
        replyCount: Int
        replies: [Reply]
    }
    type Reply {
        _id: ID
        replyBody: String
        createdAt: String
        username: String
    }
    type Category {
        _id: ID
        name: String
    }
    type Plan {
        _id: ID
        categories: [Category]
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        comment(username: String): [Comment]
        comment(_id: ID!): Comment
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addComment(commentText: String!): Comment
        # returns parent comment not newly created reply
        addReply(CommentId: ID!, replyBody: String!): Comment
        addFriend(friendId: ID!): User
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