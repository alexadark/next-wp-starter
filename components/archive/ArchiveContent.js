import { Flex } from "@chakra-ui/react"
import { Container } from "@/components/ui-components"
import { ArchiveTitle, PostsList } from "@/components/archive"
export const ArchiveContent = ({ posts = [], name }) => {
  return (
    <Container className="mainContainer">
      {name && <ArchiveTitle text="Posts from: " name={name} />}
      <Flex>
        <PostsList posts={posts} />
      </Flex>
    </Container>
  )
}
