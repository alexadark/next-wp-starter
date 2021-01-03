import { gql } from "graphql-request"
import { fragments } from "./fragments"

export const GET_PAGE = gql`
  query($id: ID!) {
    page(id: $id, idType: URI) {
      title
      slug
      uri
      databaseId
      content
    }
  }
`

export const ALL_PAGES_SLUGS = gql`
  query {
    pages {
      nodes {
        uri
        slug
      }
    }
  }
`

export const GET_POST = gql`
  query($id: ID!) {
    post(id: $id, idType: SLUG) {
      ...postFragment
    }
  }
  ${fragments}
`

export const ALL_POSTS_SLUGS = gql`
  query {
    posts {
      nodes {
        uri
        slug
      }
    }
  }
`

export const ALL_CATS_SLUGS = gql`
  query {
    categories {
      nodes {
        uri
        slug
      }
    }
  }
`

export const ALL_TAGS_SLUGS = gql`
  query {
    tags {
      nodes {
        uri
        slug
      }
    }
  }
`

export const ALL_USERS_SLUGS = gql`
  query {
    users {
      nodes {
        uri
        slug
      }
    }
  }
`

export const GET_ALL_POSTS = gql`
  query {
    posts(first: 10) {
      nodes {
        ...PostFragment
      }
    }
  }
  ${fragments}
`

export const GET_CATEGORY = gql`
  query($id: ID!) {
    category(id: $id, idType: SLUG) {
      uri
      name
      description
      posts(first: 10) {
        nodes {
          ...PostFragment
        }
      }
    }
  }
  ${fragments}
`

export const GET_TAG = gql`
  query($id: ID!) {
    tag(id: $id, idType: SLUG) {
      uri
      name
      description
      posts(first: 10) {
        nodes {
          ...PostFragment
        }
      }
    }
  }
  ${fragments}
`

export const GET_USER = gql`
  query($id: ID!) {
    user(id: $id, idType: SLUG) {
      uri
      name
      description
      avatar {
        url
      }
      posts(first: 10) {
        nodes {
          ...PostFragment
        }
      }
    }
  }
  ${fragments}
`
