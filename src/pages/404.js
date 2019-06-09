import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogLink from "../components/bloglink"
import Container from "../components/container"
import Section from "../components/section"

import styled from "@emotion/styled"

const NotFoundContainer = styled.div({
  color: "white",
  margin: "0 auto",
  maxWidth: "30em",
})

const NotFoundTitle = styled.h1({
  marginTop: "2.5rem",
  opacity: 0.6,
})

const NotFoundText = styled.p({
  opacity: 0.8,
})

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <Container>
        <NotFoundContainer>
          <NotFoundTitle>Page not found</NotFoundTitle>
          <NotFoundText>
            The page you are looking for has been removed or relocated.
          </NotFoundText>
          <BlogLink to="/">Go home</BlogLink>
        </NotFoundContainer>
      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
