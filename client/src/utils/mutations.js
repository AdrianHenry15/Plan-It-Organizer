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
}`