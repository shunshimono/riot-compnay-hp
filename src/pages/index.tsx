import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Top } from "../components/top"

const IndexPage = () => (
  <Layout>
    <Top></Top>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
