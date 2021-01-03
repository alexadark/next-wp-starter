import { requestPost, requestAllPostSlugs } from "@/lib/api"
import { QueryClient, useQuery } from "react-query"
import { dehydrate } from "react-query/hydration"

const Post = (props) => {
  console.log("props", props)
  const { data } = useQuery("posts", requestPost(props.slug))
  console.log("data", data)
  return <div>post</div>
}

export const getStaticProps = async ({ params }) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery("posts", requestPost(params.slug))
  //   const data = await requestPost(params.slug)
  //   console.log("params", params)

  return {
    props: {
      //   post: data,
      dehydratedState: dehydrate(queryClient),
      slug: params.slug,
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
