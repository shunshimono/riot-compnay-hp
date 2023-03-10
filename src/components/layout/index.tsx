import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./header"
import { Footer } from "./footer"
import "../css/destyle.css"
import "../css/global.css"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
