import { requestPage, requestAllPageSlugs } from "@/lib/api"
import { useQuery } from "react-query"

const Page = ({ pageData = {}, slug }) => {
  const { data } = useQuery(["page", slug], () => requestPage(slug), {
    initialData: pageData,
  })

  return <h1 className="bg-blue-300">Page {data?.page?.title}</h1>
}

export const getStaticProps = async ({ params }) => {
  const data = await requestPage(params.slug)

  return {
    props: {
      pageData: data,
      slug: params.slug,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = async () => {
  const allPages = await requestAllPageSlugs()
  return {
    paths: allPages?.nodes?.map((page) => `/${page?.slug}`) || [],
    fallback: true,
  }
}
export default Page
