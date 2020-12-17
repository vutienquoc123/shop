import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    query ($type: String!) {
    categories(type: $type) {
        id
        title
        slug
        icon
        children {
            id
            title
            slug
        }
        }
    }
`;
