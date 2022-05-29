import { gql } from '@apollo/client';

// get session user
export const QUERY_ME = gql`
    query Query {
        me {
        _id
        username
        email
        folders {
            _id
            title
            aspirations {
            _id
            folderId
            title
            description
            createdAt
            date
            img
            priority
            genre
            focusPoint
            diet
            region
            whatArticle
            }
        }
        }
    }
`;

// get username of user
export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
        }
    }
`

// get all users
export const QUERY_USERS = gql`
    {
        users {
            _id
            username
            email
            folders {
                _id: ID
                title: String
                createdAt: String
                aspirations {
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
                    areaOfFocus: String
                    diet: String
                    region: String
                    whatArticle: String
                    isComplete: Boolean
                }
            }
        }
    }
`;

// get single user (by username)
export const QUERY_USER = gql`
        query user($username: String!) {
            user(username: $username) {
                _id
                username
                email
                folders {
                    _id: ID
                    title: String
                    createdAt: String
                    aspirations {
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
                        areaOfFocus: String
                        diet: String
                        region: String
                        whatArticle: String
                        isComplete: Boolean
                    }
                }
            }
        }
`;

// get all aspirations
export const QUERY_ASPIRATIONS = gql`
    {
        aspirations {
            _id
            title
            description
            category
            date
            img
            priority
            genre
            focusPoint
            diet
            region
            whatArticle
        }
    }
`;

// get single aspiration
export const QUERY_ASPIRATION = gql`
    {
        aspiration {
            _id
            title
            description
            category
            date
            img
            priority
            genre
            focusPoint
            diet
            region
            whatArticle
        }
    }
`;

// get all folders
export const QUERY_FOLDERS = gql`
    {
        folders {
            _id
            title
            createdAt
            aspirations {
                _id
                title
                description
                category
                date
                img
                priority
                genre
                focusPoint
                diet
                region
                whatArticle
            }
        }
    }
`;

// get single folder
export const QUERY_FOLDER = gql`
    {
        folder {
            _id
            title
            createdAt
            aspirations {
                _id
                title
                description
                category
                date
                img
                priority
                genre
                focusPoint
                diet
                region
                whatArticle
            }
        }
    }
`;
