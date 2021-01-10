import { Box } from "@chakra-ui/react"
import Link from "next/link"
import Image from "next/image"

const WithLink = ({ post = {}, location, children }) =>
  location === "single" ? (
    children
  ) : (
    <Link href={`${post.uri}`} aria-label="View the entire post">
      {children}
    </Link>
  )

export const PostEntryMedia = ({ post = {}, location, ...props }) => {
  const img = post?.featuredImage?.node

  return (
    <>
      {img && (
        <WithLink location={location} post={post}>
          <Box
            className="entry-media"
            height="500px"
            sx={{ ">div": { height: 600, position: "relative !important" } }}
            {...props}
          >
            <Image
              src={img.sourceUrl}
              layout="fill"
              objectFit="cover"
              alt={img.altText}
            />
          </Box>
        </WithLink>
      )}
    </>
  )
}
