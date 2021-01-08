import { Button } from "@chakra-ui/react"

import Link from "next/link"

export const TaxonomyItem = ({ taxName, item, ...props }) => (
  <Link href={`${item.uri}`} passHref {...props}>
    <Button
      size="sm"
      className="mb-3 mr-3 sm:mb-0 "
      aria-label={`visit ${taxName} ${item.name} page`}
    >
      {item.name}
    </Button>
  </Link>
)
