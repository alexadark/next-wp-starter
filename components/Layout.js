import { Header } from "./header"
import { Footer } from "./footer"

export const Layout = ({ children, layoutData = {}, ...props }) => {
  console.log("layoutData", layoutData)
  const { menusData, headerFooterData } = layoutData
  const { getFooter: footerData } = headerFooterData || {}
  const headerData = { menusData, getHeader: headerFooterData?.getHeader }
  return (
    <div {...props}>
      <Header headerData={headerData} />
      {children}
      <Footer footerData={footerData} />
    </div>
  )
}
