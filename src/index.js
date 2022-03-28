// 3rd Party Modules
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"

// Project Code
import App from "./App"
import Expenses from "./routes/Expenses"
import Invoices from "./routes/Invoices"
import Invoice from "./routes/Invoice"

// Resetting CSS
import "./resets/reset.local.css"
import "./resets/typography.css"

// Selecting DOM Element to Render App within
const rootElement = document.getElementById("root")
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />}></Route>
        <Route path="invoices" element={<Invoices />}>
          <Route path=":invoiceId" element={<Invoice />}></Route>
        </Route>
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <p>Select an invoice</p>
            </main>
          }
        ></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
)
