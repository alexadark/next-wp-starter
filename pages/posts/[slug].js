import {
  requestPost,
  requestAllPostSlugs,
  requestMenus,
  requestHeaderFooter,
} from "@/lib/api"
import { useQuery } from "react-query"
import { Layout } from "@/components/Layout"

const Post = ({ postData = {}, layoutData = {}, slug }) => {
  const { data } = useQuery(["post", slug], () => requestPost(slug), {
    initialData: postData,
  })

  return <Layout layoutData={layoutData}>{data?.post?.title}</Layout>
}

export const getStaticProps = async ({ params }) => {
  const postData = await requestPost(params.slug)
  const menusData = await requestMenus()
  const headerFooterData = await requestHeaderFooter()

  return {
    props: {
      postData,
      slug: params.slug,
      layoutData: {
        menusData,
        headerFooterData,
      },
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const allPosts = await requestAllPostSlugs()
  console.log("allPosts", allPosts.nodes)
  return {
    paths: allPosts?.nodes?.map((post) => `/${post?.slug}`) || [],
    fallback: true,
  }
}

export default Post
