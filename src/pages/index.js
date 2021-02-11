import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OfficeImage from "../images/office_room.jpg"
import Lawyer from "../components/lawyer"
import WorkFields from "../components/workfields"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="width-screen overflow-hidden">
      <figure className="m-0">
        <img src={OfficeImage} alt="office" className="m-0" />
        <figcaption className="absolute top-44 left-1/2 sm:top-1/2 lg:top-3/4 lg:left-2/3">
          <div className="text-lg sm:text-xl lg:text-4xl text-white font-bold">
            LAW OFFICE C&L
            <br />
            법률사무소 씨앤엘
          </div>
        </figcaption>
      </figure>
    </section>
    <section>
      <Lawyer />
    </section>
    <section>
      <WorkFields />
    </section>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
