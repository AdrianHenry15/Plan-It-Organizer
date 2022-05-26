import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login(
    $email: String!
    $password: String!
) {
    login(
        email: $email
        password: $password
    ) {
        token
        user {
            _id
            username
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser(
    $username: String!
    $email: String!
    $password: String!
) {
    addUser(
        username: $username
        email: $email
        password: $password
    ) {
        token
        user {
            _id
        }
    }
}
`;

export const ADD_ASPIRATION = gql`
mutation addAspiration(
    $folderId: ID!,
    $title: String!, 
    $description: String!,
    $category: String!, 
    $date: String,
    $img: String,
    $priority: String,
    $genre: String,
    $focusPoint: String,
    $diet: String,
    $region: String,
    $whatArticle: String
    ) {
    addAspiration(
        folderId: $folderId,
        title: $title, 
        description: $description,
        category: $category, 
        date: $date,
        img: $img,
        priority: $priority,
        genre: $genre,
        focusPoint: $focusPoint,
        diet: $diet,
        region: $region,
        whatArticle: $whatArticle
        ) {
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

export const REMOVE_ASPIRATION = gql`
mutation removeAspiration($aspirationId: ID!, $folderId: ID!) {
    removeAspiration(aspirationId: $aspirationId, folderId: $folderId) {
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

export const ADD_FOLDER = gql`
    mutation addFolder($title: String!) {
        addFolder(title: $title) {
            _id
            title
        }
    }
`;

export const REMOVE_FOLDER = gql`
    mutation removeFolder($folderId: ID!) {
        removeFolder(folderId: $folderId) {
            _id
            title
        }
    }
`;