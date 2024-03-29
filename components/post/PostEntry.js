import { Box, Center, Divider } from "@chakra-ui/react"

import {
  PostEntryTitle,
  PostEntryMedia,
  PostEntryContent,
  PostEntryMeta,
  PostEntryInfo,
  ReadMoreButton,
  // PrevNextPostNavigation,
  // SocialShare,
} from "@/components/post"
import { Card } from "@/components/ui-components"

export const PostEntry = ({ post, location, ...props }) => {
  // const noImgClass = !post.featuredImage ? "no-img" : ""
  // const media = post.featuredImage
  //   ? post.featuredImage.node.localFile.childImageSharp.fluid.src
  //   : null
  return (
    <Box as="article" mb={14} className="entry" {...props}>
      <PostEntryMedia location={location} post={post} className="entry-media" />

      <Card>
        <PostEntryTitle
          location={location}
          post={post}
          className="mb-5 text-2xl uppercase entry-title sm:text-3xl"
        />
        <PostEntryInfo post={post} />

        <PostEntryContent location={location} post={post} />
        {location !== "single" && (
          <Center height={20}>
            <Divider />
          </Center>
        )}

        <div className="entry-footer">
          <PostEntryMeta className="entry-meta" post={post} />
          <ReadMoreButton location={location} post={post} />
        </div>
        {/* {location === 'single' && (
          <>
            <SocialShare
              url={normalize(`/${post.uri}`)}
              title={post.title}
              media={media}
            />
            <PrevNextPostNavigation ctx={ctx} />
          </>
        )} */}
      </Card>
    </Box>
  )
}
