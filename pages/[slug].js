import { requestPage, requestAllPageSlugs } from "@/lib/api"

const Page = ({ page = {}, slug }) => {
  console.log("page", page)
  return <h1>Page {page?.title}</h1>
}

export const getStaticProps = async ({ params }) => {
  const data = await requestPage(params.slug)

  return {
    props: {
      page: data,
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
