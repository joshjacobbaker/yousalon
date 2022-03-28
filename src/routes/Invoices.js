import React from "react"
import { NavLink, Outlet, useSearchParams } from "react-router-dom"

// Project JavaScript Modules
import { getInvoices } from "../data"

// Utils Functions
import { QueryNavLink } from "../utils/QueryNavLink"

export default function Invoices() {
  const inputHandler = (e) => {
    let filter = e.target.value
    if (filter) {
      setSearchParams({ filter })
    } else {
      setSearchParams({})
    }
  }

  let invoices = getInvoices()
  let [searchParams, setSearchParams] = useSearchParams()
  return (
    <main style={{ display: "flex" }}>
      <h2>Invoices</h2>

      <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
        <input value={searchParams.get("filter") || ""} onChange={inputHandler} />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter")
            if (!filter) return true
            let name = invoice.name.toLowerCase()
            return name.startsWith(filter.toLowerCase())
          })
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => ({
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              })}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </main>
  )
}
