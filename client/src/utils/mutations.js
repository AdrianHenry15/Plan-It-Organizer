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
}`;

export const ADD_USER = gql`
mutation addUser(
    $email: String!
    $password: String!
) {
    addUser(
        userName: $userName
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

export const SAVE_ASPIRATION = gql`
mutation saveAspiration($newPlan: InputAspiration!) {
    savePlan(newAspiration: $newAspiration) {
        _id
        title
        description
        date
        categories {
            productivity
            workouts
            movies
            shows
            songs
            videoGames
            food
            interiorDesign
            clothing
            inputNew
        }
        priority
        genre
        areaOfFocus
        diet
        region
        whatArticle
        isComplete
    }
}`;

// export const REMOVE_ASPIRATION = gql`
// mutation removeAspiration($aspirationId: ID!) {
//     savePlan(aspirationId: $aspirationId) {
//         _id
//         title
//         description
//         date
//         categories {
//             productivity
//             workouts
//             movies
//             shows
//             songs
//             videoGames
//             food
//             interiorDesign
//             clothing
//             inputNew
//         }
//         priority
//         genre
//         areaOfFocus
//         diet
//         region
//         whatArticle
//         isComplete
//     }
// }`