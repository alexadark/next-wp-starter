import {
  Link as ChakraLink,
  useColorModeValue as colorMode,
} from "@chakra-ui/react"
import Link from "next/link"

export const Author = ({ post = {}, ...props }) => {
  const { name, slug } = post?.author?.node || {}
  return (
    <Link
      transition="color 0.4s"
      _hover={{ textDecoration: "none", color: colorMode("primary", "dark") }}
      aria-label={`visit ${name} page`}
      href={`/author/${slug}`}
      {...props}
    >
      <a>{name}</a>
    </Link>
  )
}
