import Head from "next/head"
import { requestAllPosts } from "@/lib/api"
import Link from "next/link"

const Blog = ({ posts = {} }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li>
          <Link href={`posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export const getStaticProps = async () => {
  const data = await requestAllPosts()

  return {
    props: {
      posts: data.posts.nodes,
    },
    revalidate: 1,
  }
}

export default Blog
