import { Link } from "gatsby"
import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import logo from "../images/logo_tree.png"

const Header = ({ data }) => {
  const { businessNameKorean, phoneNumber } = data
  const [navbarOpen, setNavbarOpen] = React.useState(false)
  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-3 md:py-5 navbar-expand-lg bg-gray-200 shadow-md fixed w-screen z-50 opacity-90">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link to="/">
            <div className="flex items-center">
              <img src={logo} alt="logo-tree" width="50" className="m-0" />
              <div className="text-xs">
                CARE & LOYALTY
                <br />
                LAW OFFICE
                <br />
                {businessNameKorean}
              </div>
            </div>
          </Link>
          <button
            className="text-green-700 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col list-none md:flex-row mt-5 mb-0 md:ml-auto md:mt-0 md:space-x-10 md:items-center">
            <li className="nav-item md:m-0">
              <Link to="/about/">씨앤엘 소개</Link>
            </li>
            <li className="nav-item md:m-0">
              <Link to="/fields/">업무분야</Link>
            </li>
            <li className="nav-item md:m-0">
              <Link to="/cases/">업무사례</Link>
            </li>
            <li className="nav-item md:m-0">
              <Link to="/contact/">오시는길</Link>
            </li>
            <li className="nav-item md:text-center md:m-0">
              <a href={`tel:${phoneNumber}`}>
                상담문의
                <br />
                {phoneNumber}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
