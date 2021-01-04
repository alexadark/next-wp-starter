import { requestPost, requestAllPostSlugs } from "@/lib/api"
import { useQuery } from "react-query"

const Post = ({ postData = {}, slug }) => {
  const { data } = useQuery(["post", slug], () => requestPost(slug), {
    initialData: postData,
  })

  return <div>{data?.post?.title}</div>
}

export const getStaticProps = async ({ params }) => {
  const data = await requestPost(params.slug)

  return {
    props: {
      postData: data,
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
