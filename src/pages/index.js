import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import OfficeImage from "../images/sample-1.jpg"
import Lawyer from "../components/lawyer"
import WorkFields from "../components/workfields"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="width-screen">
      <figure>
        <img src={OfficeImage} alt="office" className="m-0" />
        <figcaption class="absolute top-2/4 left-2/4 text-lg text-white">
          <div>
            <h1>LAW OFFICE C&L</h1>
          </div>
          <div>
            <h1>법률사무소 씨앤엘</h1>
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
