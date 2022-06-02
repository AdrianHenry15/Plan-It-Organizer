import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ASPIRATION = gql`
  mutation Mutation(
    $folderId: ID!
    $title: String!
    $description: String!
    $category: String!
    $priority: String!
  ) {
    addAspiration(
      folderId: $folderId
      title: $title
      description: $description
      category: $category
      priority: $priority
    ) {
      _id
      aspirations {
        _id
      }
    }
  }
`;

export const REMOVE_ASPIRATION = gql`
  mutation Mutation($id: ID!, $folderId: ID!) {
    removeAspiration(_id: $id, folderId: $folderId) {
      _id
    }
  }
`;

export const ADD_FOLDER = gql`
  mutation Mutation($title: String!) {
    addFolder(title: $title) {
      _id
      title
    }
  }
`;

export const REMOVE_FOLDER = gql`
  mutation Mutation($id: ID!) {
    removeFolder(_id: $id) {
      _id
    }
  }
`;

export const UPDATE_FOLDER = gql`
mutation Mutation($id: ID!, $title: String!) {
  updateFolder(_id: $id, title: $title) {
    _id
    title
  }
}`
