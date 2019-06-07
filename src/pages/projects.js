import React, { useState } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from "../components/section"
import Container from "../components/container"
import Columns from "../components/columns"
import Column from "../components/column"
import Image from "../components/image"

import { css } from "@emotion/core"

const multiLine = css(
  {
    flexWrap: 'wrap',
  }
)

const halfColumn = css(
  {
    width: '50%',
    padding: 0,
  }
)

const ProjectPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const covers = data.allFile.edges.reduce((arr, img) => {
    arr[img.node.relativeDirectory] = img.node.childImageSharp.sizes
    return arr
  }, {})
  const [modal, showModal] = useState(false)
  const [title, setTitle] = useState('')

  return (
    <Layout>
      <SEO title="projects" />
      <Section>
        <Container>
          <Columns styles={multiLine}>
            {posts
              .map(({ node: post }) => (
                <Column
                  key={post.id}
                  data-modal="project"
                  onClick={() => {
                    showModal(!modal)
                    setTitle(post.frontmatter.title)
                  }}
                  styles={halfColumn}
                >
                  <Image sizes={covers[post.parent.relativeDirectory]} />
                </Column>
              ))
            }
          </Columns>
        </Container>
        <div className={`modal`} state={modal}>
          <div className="modal-background" onClick={() => showModal(!modal)}></div>
          <div className="modal-content">
            <div className="has-text-centered is-size-2">
              {title}
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => showModal(!modal)}
          ></button>
        </div>
      </Section>
    </Layout>
  )
}

export default ProjectPage

export const pageQuery = graphql`
  query ProjectPageQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            description
            draft
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
    allFile(filter: {
      sourceInstanceName: { eq: "content" },
      relativePath: { regex: "/projects/" },
      extension: { in: ["jpg", "png"] }
    }) {
      edges {
        node {
          id
          childImageSharp {
            sizes(maxWidth:570) {
              ...GatsbyImageSharpSizes_withWebp_tracedSVG
            }
          }
          relativeDirectory
        }
      }
    }
  }
`
