import {
  requestPage,
  requestAllPageSlugs,
  requestMenus,
  requestHeaderFooter,
} from "@/lib/api"
import { useQuery } from "react-query"
import { Layout } from "@/components/Layout"

const Page = ({ pageData = {}, layoutData = {}, slug }) => {
  console.log("page", layoutData)
  const { data } = useQuery(["page", slug], () => requestPage(slug), {
    initialData: pageData,
  })

  return (
    <Layout layoutData={layoutData}>
      <h1 className="bg-blue-300">Page {data?.page?.title}</h1>
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const pageData = await requestPage(params.slug)
  const menusData = await requestMenus()
  const headerFooterData = await requestHeaderFooter()

  return {
    props: {
      pageData,
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
  const allPages = await requestAllPageSlugs()
  return {
    paths: allPages?.nodes?.map((page) => `/${page?.slug}`) || [],
    fallback: true,
  }
}
export default Page
