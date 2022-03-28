// 3rd Party Modules
import React from "react"
import { Link, Outlet } from "react-router-dom"

export default (props) => {
  return (
    <div>
      <h1 className="hi">Bookkeeper!</h1>
      <nav>
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      {/* {props.children} */}
      <Outlet />
    </div>
  )
}
