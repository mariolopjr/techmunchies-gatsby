import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogLink from "../components/bloglink"
import Container from "../components/container"
import Section from "../components/section"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

const sectionStyles = css(
  {
    marginTop: '2.5rem',
  }
)

const PostLinkContainer = styled.div(
  {
    margin: '0 auto',
    maxWidth: '30em',

    ':not(:last-of-type)': {
      marginBottom: '0.5rem',
    }
  }
)

const BlogPage = () => (
  <StaticQuery
    query={graphql`
      query BlogPageQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { fileAbsolutePath: { regex: "/blog/" }, frontmatter: { draft: { ne: true } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `}
    render={ ({ allMarkdownRemark: { edges: posts } }) => (
      <Layout>
        <SEO title="blog" />
        <Section styles={sectionStyles}>
          <Container>
            {posts
              .map(({ node: post }) => (
                <PostLinkContainer
                  key={post.id}
                >
                  <BlogLink to={post.fields.slug}>
                    {post.frontmatter.title}
                  </BlogLink>
                  <br />
                  <small>{post.frontmatter.date}</small>
                </PostLinkContainer>
              ))}
          </Container>
        </Section>
      </Layout>
    )}
  />
)

export default BlogPage
