import { Header } from "./header"
import { Footer } from "./footer"
import { Box, Flex, chakra } from "@chakra-ui/react"
import Headroom from "react-headroom"

export const Layout = ({
  children,
  page = {},
  layoutData = {},
  type = "page",
  ...props
}) => {
  const { menusData, headerFooterData } = layoutData
  const { getFooter: footerData } = headerFooterData || {}
  const headerData = { menusData, getHeader: headerFooterData?.getHeader }

  const layoutClass = page !== undefined ? (page.slug ? page.slug : page) : ""
  const pageTemplate = page?.template
    ? page?.template?.templateName?.toLowerCase()
    : ""
  const fullWidthClass = pageTemplate === "full width" ? "fullWidth" : ""

  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      className={`${layoutClass}=${type} ${fullWidthClass}`}
      sx={{
        "&.fullWidth": {
          ".mainContainer": {
            maxWidth: `100%`,
            px: 0,
          },
        },
      }}
      {...props}
    >
      <Box as={Headroom} sx={{ "&>div": { zIndex: "2!important" } }}>
        <Header headerData={headerData} />
      </Box>
      <Box as="main" flex={1} py={16}>
        {children}
      </Box>
      <Footer footerData={footerData} />
    </Flex>
  )
}
