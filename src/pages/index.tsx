import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Top } from "../components/top"
import { Service } from "../components/service"
import { About } from "../components/about"
import { News } from "../components/news"

const IndexPage = () => (
  <Layout>
    <Top></Top>
    <Service></Service>
    <About></About>
    <News></News>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
