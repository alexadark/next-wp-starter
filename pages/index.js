import Head from "next/head"
import { requestAllPosts, requestMenus } from "@/lib/api"
import Link from "next/link"
import { useQuery } from "react-query"

const Blog = ({ postsData = {}, menusData = {} }) => {
  console.log("menus", menusData)
  console.log("posts", postsData)
  const { data } = useQuery(["posts"], requestAllPosts, {
    initialData: postsData,
    // refetchInterval: 1000,
  })

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
  const postsData = await requestAllPosts()
  const menusData = await requestMenus()

  return {
    props: {
      postsData,
      menusData,
    },
    revalidate: 1,
  }
}

export default Blog
