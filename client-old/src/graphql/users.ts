import { gql } from '@apollo/client'

export const ALL_USERS = gql`
    query MyQuery {
        system_base_users_info {
        firstName
        lastName
        }
    }
`
