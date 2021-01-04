import Head from "next/head"
import { requestAllPosts } from "@/lib/api"
import Link from "next/link"
import { useQuery } from "react-query"

const Blog = ({ posts = {} }) => {
  const { data } = useQuery(["posts"], requestAllPosts, {
    initialData: posts,
    // refetchInterval: 1000,
  })
  console.log("data", data)
  return (
    <ul>
      {data?.posts?.nodes?.map((post) => (
        <li>
          <Link href={`posts/${post?.slug}`}>
            <a>{post?.title}</a>
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
      posts: data,
    },
    revalidate: 1,
  }
}

export default Blog
