import React from "react"
import { NavLink } from "react-router-dom"
const PageNavigation = (props) => {

      return(
        <>
        <NavLink to="/">Home</NavLink>/{props.title}
        </>
      )
}

export default PageNavigation;