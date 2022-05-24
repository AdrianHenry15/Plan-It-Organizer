import { gql } from '@apollo/client';

// get session user
export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            aspirationCount
            savedAspirations {
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
        }
    }
`;

// get all users
export const GET_USERS = gql`
    {
        users {
            _id
            username
            email
            aspirationCount
            savedAspirations {
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
        }
    }
`;

// get single user (by username)
export const GET_USER = gql`
    {
        user {
            _id
            username
            email
            aspirationCount
            savedAspirations {
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
        }
    }
`

// get all aspirations
export const GET_ASPIRATIONS = gql`
    {
        aspirations {
            _id
            title
            description
            categories
            createdAt
            date
            img
            priority
            genre
            areaOfFocus
            diet
            region
            whatArticle
            isComplete
        }
    }
`;

// get single aspiration
export const GET_ASPIRATION = gql`
    {
        aspiration {
            _id
            title
            description
            categories
            createdAt
            date
            img
            priority
            genre
            areaOfFocus
            diet
            region
            whatArticle
            isComplete
        }
    }
`;


