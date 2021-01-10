import { Box, useColorModeValue as colorMode } from "@chakra-ui/react"

export const ArchiveTitle = ({ name, text }) => {
  return (
    <Box
      bg={colorMode("archiveTitleBg", "modes.dark.archiveTitleBg")}
      className="inline-block px-4 py-3 mb-10 rounded-lg shadow-lg archive-title sm:px-6"
    >
      <h2 className="text-xl tracking-wider uppercase">
        {text} {name}
      </h2>
    </Box>
  )
}
