import slashes from "remove-trailing-slash"
const API_URL = `${slashes(process.env.WP_URL)}/graphql`
import { request } from "graphql-request"
import {
  GET_PAGE,
  GET_POST,
  ALL_PAGES_SLUGS,
  ALL_POSTS_SLUGS,
  GET_ALL_POSTS,
  GET_CATEGORY,
  GET_TAG,
  GET_USER,
  ALL_CATS_SLUGS,
  ALL_TAGS_SLUGS,
  ALL_USERS_SLUGS,
  GET_MENUS,
  GET_HEADER_FOOTER,
} from "./querys"

const requestAPI = async (query, variables = {}) => {
  return await request(API_URL, query, variables)
}

export const requestPage = async (slug) => {
  return await requestAPI(GET_PAGE, { id: slug })
}

export const requestAllPageSlugs = async () => {
  return await requestAPI(ALL_PAGES_SLUGS)
}

export const requestPost = async (slug) => {
  return await requestAPI(GET_POST, { id: slug })
}

export const requestAllPostSlugs = async () => {
  return await requestAPI(ALL_POSTS_SLUGS)
}

export const requestCatSlugs = async () => {
  return await requestAPI(ALL_CATS_SLUGS)
}

export const requestTagSlugs = async () => {
  return await requestAPI(ALL_TAGS_SLUGS)
}

export const requestUserSlugs = async () => {
  return await requestAPI(ALL_USERS_SLUGS)
}

export const requestAllPosts = async () => {
  return await requestAPI(GET_ALL_POSTS)
}

export const requestCategory = async (slug) => {
  return await requestAPI(GET_CATEGORY, { id: slug })
}

export const requestTag = async (slug) => {
  return await requestAPI(GET_TAG, { id: slug })
}

export const requestUser = async (slug) => {
  return await requestAPI(GET_USER, { id: slug })
}

export const requestMenus = async () => {
  return await requestAPI(GET_MENUS)
}

export const requestHeaderFooter = async () => {
  return await requestAPI(GET_HEADER_FOOTER)
}
