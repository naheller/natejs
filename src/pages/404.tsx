import React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO title="Page Not found" />
    <h1>PAGE NOT FOUND</h1>
    <p>No content exists at this address...</p>
  </Layout>
)

export default NotFoundPage
