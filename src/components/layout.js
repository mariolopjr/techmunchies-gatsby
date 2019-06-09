/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import styled from "@emotion/styled"
import { colors, Theme } from "./styles"

const Container = styled.div({
  backgroundColor: colors.bgcolor,
  minHeight: "100vh",
})

const Layout = ({ children, styles }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            site
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {Theme()}
        <Container css={styles}>
          <Header siteName={data.site.siteMetadata.site} />
          {children}
          <Footer siteName={data.site.siteMetadata.site} />
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
}

export default Layout
