import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Columns from "../components/columns"
import Column from "../components/column"
import Section from "../components/section"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors, mq } from "../components/styles"

const sectionStyles = css({
  margin: "0 auto",
  maxWidth: "60em",
})

const columnStyles = css({
  color: "white",
  flex: "none",
  marginLeft: "4.33333%",
  width: "83.33333%",

  [mq[0]]: {
    marginLeft: "8.33333%",
  },
})

const PostContainer = styled.div({
  margin: "0 auto",
})

const PostTitle = styled.h1({
  fontSize: "2rem",
  fontWeight: 500,
  lineHeight: 1.125,
  marginBottom: "1.5rem",
  textAlign: "center",
  wordBreak: "break-word",

  [mq[0]]: {
    fontSize: "3rem",
    fontWeight: 600,
  },
})

const PostDate = styled.p({
  fontSize: 12,
  letterSpacing: 1.3,
  marginBottom: "1em",
  opacity: 0.7,
  textAlign: "center",
})

const PostDescription = styled.p({
  fontSize: "1.5rem",
  marginBottom: "1em",
  opacity: 0.8,
  textAlign: "center",

  [mq[0]]: {
    fontSize: "2rem",
  },
})

const PostSeparator = styled.hr({
  backgroundColor: "white",
  marginLeft: "0 auto",
  maxWidth: "33%",
  opacity: 0.5,
})

const PostContent = styled.p({
  maxWidth: "40em",
  margin: "0px auto",
  opacity: 0.8,
})

const postContentStyles = css({
  a: {
    boxShadow: `
        0 -1px 0 0 ${colors.textShadowColor} inset,
        0 -2px 0 0 transparent inset`,
    color: colors.colorAccent,
    fontWeight: 300,
    opacity: 0.7,
    textDecoration: "none",
    textShadow: `
          0px -2px 0 ${colors.textShadowColor},  0px -1px 0 ${
      colors.textShadowColor
    },  0px 0px 0 ${colors.textShadowColor},
          2px -2px 0 ${colors.textShadowColor},  2px -1px 0 ${
      colors.textShadowColor
    },  2px 0px 0 ${colors.textShadowColor},
          -2px -2px 0 ${colors.textShadowColor}, -2px -1px 0 ${
      colors.textShadowColor
    }, -2px 0px 0 ${colors.textShadowColor},
          1px -2px 0 ${colors.textShadowColor},  1px -1px 0 ${
      colors.textShadowColor
    },  1px 0px 0 ${colors.textShadowColor},
          -1px -2px 0 ${colors.textShadowColor}, -1px -1px 0 ${
      colors.textShadowColor
    }, -1px 0px 0 ${colors.textShadowColor},
          0px -2px 0 ${colors.textShadowColor},  0px -1px 0 ${
      colors.textShadowColor
    },  0px 0px 0 ${colors.textShadowColor}`,
    transition: "all .3s ease-in",

    ":active, :focus, :hover": {
      boxShadow: `0 -1px 0 0 ${colors.colorAccent} inset, 0 -2px 0 0 ${
        colors.textShadowColor
      }`,
      color: "white",
      opacity: 0.9,
      transition: "all .3s ease-out",
    },

    "::selection": {
      background: colors.colorAccent,
      color: colors.textShadowColor,
      textShadow: "none",
    },
  },

  ".gatsby-resp-image-image": {
    borderRadius: 6,
    boxShadow:
      "rgba(0, 0, 0, 0.4) 0px 3px 8px 0px, rgba(0, 0, 0, 0.16) 0px 0px 0px 1px",
  },
})

const ProjectTemplate = ({ data: { markdownRemark: post } }) => (
  <Layout>
    <SEO
      description={post.frontmatter.description}
      title={post.frontmatter.title}
    />
    <Section styles={sectionStyles}>
      <PostContainer>
        <Columns>
          <Column styles={columnStyles}>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostDescription>{post.frontmatter.tagline}</PostDescription>
            <PostSeparator />
            <PostDate>{post.frontmatter.date}</PostDate>
            <PostContent
              dangerouslySetInnerHTML={{ __html: post.html }}
              css={postContentStyles}
            />
          </Column>
        </Columns>
      </PostContainer>
    </Section>
  </Layout>
)

export default ProjectTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        date(formatString: "YYYY")
        description
        tagline
        title
      }
      html
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
