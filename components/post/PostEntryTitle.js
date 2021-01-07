import { Heading, Link as ChakraLink } from "@chakra-ui/react"

import Link from "next/link"

export const PostEntryTitle = ({ post, location, ...props }) => {
  const { title, uri } = post

  return (
    <>
      {location === "single" ? (
        <Heading
          as="h1"
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
          {...props}
        />
      ) : (
        <Heading as="h2" className="entry-title" {...props}>
          <Link href={`${uri}`}>
            <a dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </Heading>
      )}
    </>
  )
}
