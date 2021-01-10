import { Menu } from "@/components/menu"
import { Box, chakra, useColorModeValue as colorMode } from "@chakra-ui/react"
import { ColorSwitch } from "@/components/ColorSwitch"

export const Header = ({ headerData = {} }) => {
  const { menusData, getHeader } = headerData
  const { siteTagLine, siteTitle } = getHeader || {}

  return (
    <chakra.header
      color={colorMode("headerColor", "modes.dark.headerColor")}
      bg={colorMode("headerBg", "modes.dark.headerBg")}
      className="py-4 shadow-md header"
    >
      <div className="container flex justify-between mx-auto">
        <Box>
          <h1>{siteTitle}</h1>
          <p>{siteTagLine}</p>
        </Box>
        <Menu menuSlug="header" menusData={menusData} />
        <ColorSwitch />
      </div>
    </chakra.header>
  )
}
