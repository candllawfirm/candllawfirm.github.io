/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import "./layout.css"
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import logoText from "../images/logo_text.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="font-default">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer className="p-5 bg-gray-200">
        <div className="sm:flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="m-0 mr-3">법률사무소</h1>
            <div>
              <img
                src={logoText}
                alt="logo-text"
                width="80"
                class="inline mb-0"
              />
            </div>
          </div>
          <div>
            <h2 className="text-green-700 mb-2">0507-1333-7417</h2>
            <h5>상담시간 09:00~18:00 / 주말 공휴일 휴무</h5>
          </div>
        </div>
        <hr />
        <div>
          <h4 className="mb-2">법률사무소 씨앤엘</h4>
          <div className="mb-1">
            <span className="mr-2 sm:mr-5">대표: 홍순협</span>
            <span className="mr-2 sm:mr-5">사업자번호: </span>
            <span>개인정보보호책임자:</span>
          </div>
          <div className="mb-1">
            <span>
              주소: 충남 천안시 동남구 청수5로 4 더다움트윈브릿지 A동 402호
            </span>
          </div>
          <div className="mb-1">
            <span className="mr-2 sm:mr-5">TEL: 0507-1333-7417</span>
            <span className="mr-2 sm:mr-5">FAX: 0507-1333-7417</span>
          </div>
          <div className="mb-1">
            <span>E-MAIL: attorneyhongslaw@gmail.com</span>
          </div>
          <p>
            COPYRIGHT © {new Date().getFullYear()} C&L LAW OFFICE. ALL RIGHTS
            RESERVED.
          </p>
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
