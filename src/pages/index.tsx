import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Top } from "../components/top"
import { Service } from "../components/service"

const IndexPage = () => (
  <Layout>
    <Top></Top>
    <Service></Service>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
