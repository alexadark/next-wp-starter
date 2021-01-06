import { Header } from "./header"

export const Layout = ({ children, layoutData, ...props }) => {
  const { menusData, headerFooterData } = layoutData
  console.log("layout", layoutData)
  const headerData = { menusData, getHeader: headerFooterData.getHeader }
  return (
    <div {...props}>
      <Header headerData={headerData} />
      {children}
    </div>
  )
}
