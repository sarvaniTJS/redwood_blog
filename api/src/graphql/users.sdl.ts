export const schema = gql`
  type User {
    id: Int!
    name: String!
    email: String!
    posts: Post!
    roles: String!
  }

  type Query {
    users: [User!]! @requireAuth
  }
`
