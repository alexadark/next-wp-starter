import { Box } from "@chakra-ui/react"
import { gutenbergStyles } from "@/styles/gutenbergStyles"

export const PostEntryContent = ({ post, location, ...props }) => {
  const content = location === "single" ? post.content : post.excerpt
  const attributes = location === "single" ? { id: "content" } : {}
  return (
    <Box {...attributes} {...props} sx={{ ...gutenbergStyles }}>
      <Box className="entry-content">
        <Box dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Box>
  )
}
