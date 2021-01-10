import React from "react"

export const Menu = ({ menuSlug, menusData = {} }) => {
  const menu = menusData?.menus?.nodes?.filter(
    (menu) => menu.slug === menuSlug
  )[0]

  return (
    <ul>
      {menu?.menuItems?.nodes?.map((menuItem) => (
        <li key={menuItem.id}>{menuItem.label}</li>
      ))}
    </ul>
  )
}
