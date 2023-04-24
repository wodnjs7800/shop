import React from "react"
import "./Nav.css"
import { Link } from "react-router-dom"

function Nav() {
  let num = Math.floor(Math.random() * 3)
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <Link to="/">쇼핑몰</Link>
      </div>
      <ul className="nav-links">
        <Link to="/shoes">신발</Link>
        <Link to="/clothes">의류</Link>
        <Link to="/cart">장바구니</Link>
      </ul>
    </div>
    </>
  );

}
export default Nav;