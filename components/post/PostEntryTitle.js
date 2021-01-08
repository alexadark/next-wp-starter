import { Heading, Link as ChakraLink, chakra } from "@chakra-ui/react"

import Link from "next/link"

export const PostEntryTitle = ({ post, location, ...props }) => {
  const { title, uri } = post

  return (
    <>
      {location === "single" ? (
        <chakra.h1
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
          {...props}
        />
      ) : (
        <chakra.h2 className="entry-title" {...props}>
          <Link href={`${uri}`}>
            <a dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </chakra.h2>
      )}
    </>
  )
}
