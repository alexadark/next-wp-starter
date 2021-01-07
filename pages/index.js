import Head from "next/head"
import { requestAllPosts, requestMenus, requestHeaderFooter } from "@/lib/api"
import Link from "next/link"
import { useQuery } from "react-query"
import { Layout } from "@/components/Layout"
import { PostEntry } from "@/components/post"

const Blog = ({ postsData = {}, layoutData = {} }) => {
  const { data } = useQuery(["posts"], requestAllPosts, {
    initialData: postsData,
    // refetchInterval: 1000,
  })

  return (
    <Layout layoutData={layoutData}>
      <ul>
        {data?.posts?.nodes?.map((post) => (
          <li>
            {/* <Link href={`posts/${post?.slug}`}>`
              <a>{post?.title}</a>
            </Link> */}
            <PostEntry post={post} location="archive" />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const postsData = await requestAllPosts()
  const menusData = await requestMenus()
  const headerFooterData = await requestHeaderFooter()

  return {
    props: {
      postsData,
      layoutData: {
        menusData,
        headerFooterData,
      },
    },
    revalidate: 1,
  }
}

export default Blog
