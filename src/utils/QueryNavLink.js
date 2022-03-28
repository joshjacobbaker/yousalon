import React from "react"
import { useLocation, NavLink } from "react-router-dom"

export function QueryNavLink({ to, ...props }) {
  let location = useLocation()
  console.log(location)
  return <NavLink to={to + location.search} {...props} />
}
