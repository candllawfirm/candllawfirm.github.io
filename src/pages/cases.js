import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import OfficeImage from "../images/sample.jpg"

const CasesPage = () => (
  <Layout>
    <SEO title="Cases" />
    <section className="width-screen sm:h-96 overflow-hidden">
      <figure className="m-0">
        <img src={OfficeImage} alt="office" className="m-0" />
        <figcaption className="absolute top-32 sm:top-44 left-1/2 text-lg text-white transform -translate-x-1/2">
          <h1>업무사례</h1>
        </figcaption>
      </figure>
    </section>
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        업무사례
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
          lobortis felis, non lacinia leo. Cras dapibus tortor eu lacus laoreet
          euismod. Nunc congue vestibulum finibus. Pellentesque in enim quis
          libero gravida tincidunt non eget diam. Donec nisl quam, bibendum ut
          aliquet ut, pulvinar non ligula. Integer eu aliquet est. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Duis sit amet
          porttitor lorem. Fusce enim leo, porta id dignissim a, convallis
          suscipit nibh. Aliquam porttitor lorem eu ultricies ullamcorper. Cras
          vel laoreet lectus, eget laoreet tellus. Aenean a velit convallis,
          varius ipsum a, mollis turpis. Duis nec nibh fermentum, pretium urna
          ac, malesuada ligula. Suspendisse euismod pretium eros, eget varius
          est egestas in. Praesent eu erat ultricies, facilisis tortor
          venenatis, bibendum magna.
        </p>
      </div>
    </section>
  </Layout>
)

export default CasesPage
