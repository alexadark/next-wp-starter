import { gql } from "graphql-request"

export const fragments = gql`
  fragment PostFragment on Post {
    id
    uri
    slug
    title
    excerpt
    date

    featuredImage {
      node {
        sourceUrl
        srcSet
        altText
      }
    }
    categories {
      nodes {
        id
        slug
        name
        uri
      }
    }

    author {
      node {
        name
        slug
        uri
        avatar {
          url
        }
      }
    }
    tags {
      nodes {
        name
        slug
        uri
      }
    }
  }
`
