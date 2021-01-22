import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo_tree.png"

const Header = ({ siteTitle }) => (
  <header className="bg-gray-200 p-5 shadow-md fixed w-screen z-50 opacity-90">
    <div className="flex justify-between items-center">
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} alt="logo-tree" width="50" class="m-0" />
          <div className="text-xs">
            CARE & LOYALTY
            <br />
            LAW OFFICE
            <br />
            법률사무소
          </div>
        </div>
      </Link>
      <nav className="hidden md:flex space-x-10 items-center">
        <div>씨앤엘 소개</div>
        <div>업무분야</div>
        <div>업무사례</div>
        <div>오시는길</div>
        <div className="text-center">
          상담문의
          <br />
          0507-1333-7417
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
