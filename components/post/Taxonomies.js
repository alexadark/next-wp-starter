import { chakra, Flex, useColorModeValue as colorMode } from "@chakra-ui/react"

import { TaxonomyItem } from "@/components/post"

export const Taxonomies = ({ post, taxName, singularName, ...props }) => {
  const taxonomies = post[taxName].nodes

  return (
    taxonomies.length > 0 && (
      <Flex wrap="wrap" align="center" my={5}>
        <chakra.h3
          fontFamily="body"
          bg={colorMode("infoBg", "modes.dark.infoBg")}
          className="px-4 py-2 mb-3 mr-4 text-sm italic font-normal leading-tight capitalize rounded-md sm:mb-0"
        >
          {taxonomies.length > 1 ? `${taxName} : ` : `${singularName} : `}
        </chakra.h3>
        <Flex wrap="wrap" {...props}>
          {taxonomies.map((cat) => (
            <TaxonomyItem key={cat.slug} taxName="category" item={cat} />
          ))}
        </Flex>
      </Flex>
    )
  )
}
