import { Menu } from "@/components/menu"
import {
  Box,
  Flex,
  HStack,
  chakra,
  useColorModeValue as colorMode,
} from "@chakra-ui/react"

export const Header = ({ headerData }) => {
  const { menusData, getHeader } = headerData
  console.log("menuData", headerData)
  return (
    <chakra.header
      color={colorMode("headerColor", "modes.dark.headerColor")}
      bg={colorMode("headerBg", "modes.dark.headerBg")}
      className="py-4 shadow-md header"
    >
      <div className="container mx-auto">
        <h1>Header</h1>
        <Menu menuSlug="header" menusData={menusData} />
      </div>
    </chakra.header>
  )
}
