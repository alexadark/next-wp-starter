import { Flex, Button } from "@chakra-ui/react"

import Link from "next/link"

export const ReadMoreButton = ({ location, post, ...props }) => (
  <>
    {location !== "single" && (
      <Flex justify="flex-end" {...props}>
        <Link
          href={post.uri}
          passHref
          className="read-more"
          aria-label="Read More from this post"
        >
          <Button>Read More</Button>
        </Link>
      </Flex>
    )}
  </>
)
