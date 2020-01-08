import React from "react"
import { graphql } from "gatsby"
import Link from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Arrow from "../components/arrow"
import Image from "../components/image"
import Section from "../components/section"

import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { colors, mq } from "../components/styles"

const ProjectContainer = styled.div({
  margin: "0 auto",
})

const ProjectDetails = styled.div({
  display: "inline-block",
  margin: "1.5rem 0.5rem 2.5rem 0.5rem",
  maxWidth: "100%",

  [mq[0]]: {
    maxWidth: "40%",
  },
})

const ProjectHeroContainer = styled.div({
  display: "block",
  marginBottom: "1.5rem",
  padding: "0 4rem"
})

const ProjectImage = styled.div({
  display: "inline-block",
  height: "100%",
  textAlign: "center",
})

const ProjectTagline = styled.p({
  fontSize: "2.5rem",
  fontWeight: 500,
  marginBottom: "1rem",
  wordBreak: "break-word",

  [mq[0]]: {
    fontSize: "4.69rem",
  },
})

const ProjectTitle = styled.h1({
  fontSize: "1.5rem",
  fontWeight: 300,
  lineHeight: "2rem",
  marginBottom: "5rem",
  wordBreak: "break-word",

  a: {
    borderBottomWidth: "6px",
    borderBottomStyle: "solid",
    borderBottomColor: colors.bgcolor,
    opacity: 0.9,
    textDecoration: "none",
  },

  [mq[0]]: {
    fontSize: "3.7rem",
    fontWeight: 400,
    lineHeight: "4.2rem",
  },
})

const PostContent = styled.p({
  color: "white",
  fontSize: "1rem",
  margin: "0 auto",
  opacity: 0.9,
  padding: "1rem",

  p: {
    margin: "0 auto",
    maxWidth: "40rem",
  },

  [mq[0]]: {
    fontSize: "1.25rem",
  },
})

const NavToProjects = styled(Link)({
  fontSize: "1rem",
  textDecoration: "none",
  transitionDuration: "250ms",
  transitionTimingFunction: "ease-in-out",
  transitionDelay: "initial",
  transitionProperty: "color",

  ":active, :focus, :hover": {
    svg: {
      transform: "rotate(180deg), translateX(0.25rem)",
    },
  },

  [mq[0]]: {
    fontSize: "1.2rem",
  },
})

const arrowStyles = css({
  marginRight: "0.5rem",
  transform: "rotate(180deg)",
  transitionDuration: "600ms",
  transitionTimingFunction: "cubic-bezier(0.25, 1, 0.25, 1)",
  transitionDelay: "initial",
  transitionProperty: "transform",
  verticalAlign: "middle",

  g: {
    stroke: "currentcolor",
    transitionDuration: "250ms",
    transitionTimingFunction: "ease-in-out",
    transitionDelay: "initial",
    transitionProperty: "color",
  }
})

const imageStyles = css({
  borderRadius: 0,
})

const sectionStyles = css({
  margin: "0",
  marginTop: "0.5rem",
  padding: "0",
})

const ProjectTemplate = ({ data: { markdownRemark: project, allFile: { edges: images } } }) => {
  const { node: cover } = images.find(
    image => image.node.childImageSharp.fluid.originalName = "cover.png"
  )
  const { frontmatter: fm } = project

  return (
    <Layout>
      <SEO
        description={fm.description}
        title={fm.title}
      />
      <Section styles={sectionStyles}>
        <ProjectContainer>
          <ProjectHeroContainer css={{backgroundColor: fm.maincolor}}>
            <ProjectDetails>
              <ProjectTagline css={{color: fm.taglinecolor}}>
                {fm.tagline}
              </ProjectTagline>
              <ProjectTitle>
                <a
                  href={fm.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  css={{
                    color: fm.titlecolor
                  }}
                >
                  {fm.title}
                </a>
              </ProjectTitle>
              <NavToProjects
                css={{
                  color: fm.titlecolor,

                  ":active, :focus, :hover": {
                    color: fm.hovercolor,

                    svg: {
                      color: fm.hovercolor,
                    },
                  }
                }}
                to={"/projects"}
              >
                <Arrow
                  styles={css({
                    color: fm.titlecolor,
                  }, arrowStyles)}
                />
                Back to projects
              </NavToProjects>
            </ProjectDetails>
            <ProjectImage>
              <Image sizes={cover.childImageSharp.fluid} styles={imageStyles} />
            </ProjectImage>
          </ProjectHeroContainer>
          <PostContent
            dangerouslySetInnerHTML={{ __html: project.html }}
          />
        </ProjectContainer>
      </Section>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($id: String!, $relativeDir: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
      frontmatter {
        description
        tagline
        title
        link
        maincolor
        titlecolor
        taglinecolor
        hovercolor
      }
      html
    }
    allFile(
      filter: {
        extension: { in: ["jpg", "png"] }
        relativeDirectory: { eq: $relativeDir }
      }
    ) {
      edges {
        node {
          id
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              originalName
            }
          }
        }
      }
    }
  }
`
