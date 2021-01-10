import { PostEntry } from "@/components/post"

export const PostsList = ({ posts = [], ...props }) => (
  <div className="posts-list" {...props}>
    {posts?.map((post) => (
      <PostEntry key={post.id} location="archive" post={post} />
    ))}
  </div>
)
