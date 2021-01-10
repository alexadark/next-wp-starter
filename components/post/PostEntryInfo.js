import { Box, useColorModeValue as colorMode } from "@chakra-ui/react"
import { Date, Author } from "@/components/post"

export const PostEntryInfo = ({ post = {}, ...props }) => {
  return (
    <Box
      bg={colorMode("infoBg", "modes.dark.infoBg")}
      className="inline-block px-4 py-2 mb-10 text-sm italic rounded-md entry-info"
      {...props}
    >
      <span>Posted on:</span> <Date date={post.date} /> by{" "}
      <Author post={post} />
    </Box>
  )
}
