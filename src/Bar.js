import React from "react"
import "./style.css"

import big from "../assets/big.jpg"
import small from "../assets/small.jpg"

export default () => {
  return (
    <div>
      <div className="hello background">Hi from React</div>
      <img src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
      <p>Yo!!!</p>
    </div>
  )
}
