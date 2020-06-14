import React from "react"
import { PageProps, /*Link,*/ graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import SocialLink from "../components/socialLink"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Home" />
    <div className="h-full flex flex-col items-center justify-center">
      <div className="max-w-xl m-8 flex flex-col sm:flex-row items-center">
        <div style={{ height: "175px" }}>
          <Image />
        </div>
        <div>
          <div className="pt-6 sm:pl-6 sm:pt-0">
            <p className="font-sans text-lg text-center sm:text-left text-orange-400 leading-relaxed">
              <span>I'm </span>
              <span className="font-bold">Nathan Heller</span>
              <span>
                , a UI engineer with a focus in mobile-first design principles.
                I like to think big and start small. My favorite tools are
                React, Redux, TypeScript, and GraphQL.
              </span>
            </p>
          </div>
          <div className="w-full flex justify-between pt-6 px-6">
            <SocialLink type="github" color="#f6ad55" />
            <SocialLink type="linkedIn" color="#f6ad55" />
            <SocialLink type="twitter" color="#f6ad55" />
            <SocialLink type="instagram" color="#f6ad55" />
            <SocialLink type="email" color="#f6ad55" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
