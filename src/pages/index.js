import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors, } from "../components/styles"

const homeFullPage = css(
  {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
  }
)

const HomeBody = styled.main(
  {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    flexShrink: 0,
  }
)

const TitleContainer = styled.div(
  {
    flexGrow: 1,
    flexShrink: 1,
    margin: '0 auto',
    position: 'relative',
    textAlign: 'center',
  }
)

const Title = styled.h1(
  {
    borderBottom: 'none',
    color: colors.textcolor,
    letterSpacing: '0.1em',
    marginBottom: '1.5rem',
    fontSize: '2rem',
    fontWeight: 500,
    lineHeight: 1.125,
  }
)

const Subtitle = styled.h2(
  {
    borderBottom: 'none',
    color: 'white',
    marginTop: '-1.25rem',
    fontWeight: 300,
    lineHeight: 1.25,
    fontSize: '.75rem',
  }
)

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexPageQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <Layout styles={homeFullPage}>
        <SEO title="home" />
        <HomeBody>
          <TitleContainer>
            <Title>
              {data.site.siteMetadata.title}
            </Title>
            <Subtitle>
              {data.site.siteMetadata.subtitle}
            </Subtitle>
          </TitleContainer>
        </HomeBody>
      </Layout>
    )}
  />
)

export default IndexPage
