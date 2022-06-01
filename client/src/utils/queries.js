import { gql } from "@apollo/client";

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
      }
    }
  }
`;

// get single folder
export const QUERY_FOLDER = gql`
  query Query($id: ID!) {
    folder(_id: $id) {
      _id
      title
      aspirations {
        _id
      }
    }
  }
`;
// get all folders
export const QUERY_FOLDERS = gql`
  query Query($username: String) {
    folders(username: $username) {
      _id
      title
    }
  }
`;

// get single aspiration
export const QUERY_ASPIRATION = gql`
  query Query($id: ID!) {
    aspiration(_id: $id) {
      _id
      title
      description
      category
      createdAt
      date
      img
      priority
      genre
      focusPoint
      diet
      culture
      whatArticle
    }
  }
`;
