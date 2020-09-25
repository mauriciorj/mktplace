import { GraphQLList, GraphQLString, GraphQLSchema } from "graphql"
import axios from 'axios'

import { GraphQLObjectType } from 'graphql'

const url = 'localhost:8000/user'

const UserInfos = new GraphQLObjectType({
    name: 'UserInfo',
    fields: () => ({
        firstName: { type: GraphQLString},
        lastName: { type: GraphQLString}
    })
})

// Queries
const UserQuery = new GraphQLObjectType({
    name: 'userQuery',
    fields: {
        userInfos: {
            type: new GraphQLList(UserInfos),
            resolve(parent, args){
                return axios.get(url)
                .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: UserQuery
})