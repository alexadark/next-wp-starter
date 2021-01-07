import { Flex, Button } from "@chakra-ui/react"

import Link from "next/link"

export const ReadMoreButton = ({ location, post, ...props }) => (
  <>
    {location !== "single" && (
      <Flex justify="flex-end" {...props}>
        <Button
          as={Link}
          href={post.uri}
          className="read-more"
          aria-label="Read More from this post"
        >
          <a>Read More</a>
        </Button>
      </Flex>
    )}
  </>
)
