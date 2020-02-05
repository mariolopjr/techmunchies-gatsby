/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField, createRedirect } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }

  const redirects = [
    {
      from: "/tutorial/unix/installing-freebsd-9-release-onto-a-zfs-root",
      to: "/blog/2013-07-20-installing-freebsd-9-release-onto-a-zfs-root"
    },
    {
      from: "/installing-freebsd-9-release-onto-a-zfs-root",
      to: "/blog/2013-07-20-installing-freebsd-9-release-onto-a-zfs-root"
    },
    {
      from: "/news/very-interesting-unfortunately-the-cpu-specs-are",
      to: "/blog/2018-04-22-motorola-x-photos-and-specs"
    },
    {
      from: "/motorola-x-photos-and-specs",
      to: "/blog/2018-04-22-motorola-x-photos-and-specs"
    },
    {
      from: "/news/ouch-ars-technica",
      to: "/blog/2018-04-22-2-million-email-password-data-exposed-for-ubuntu-forum-users"
    },
    {
      from: "/2-million-email-password-data-exposed-for-ubuntu-forum-users",
      to: "/blog/2018-04-22-2-million-email-password-data-exposed-for-ubuntu-forum-users"
    },
    {
      from: "/news/you-get-the-dongle-you-pay-for-in-google",
      to: "/blog/2018-04-22-chromecast-review"
    },
    {
      from: "/chromecast-review",
      to: "/blog/2018-04-22-chromecast-review"
    },
    {
      from: "/hints/windows/intel-smart-response-technology-ssd-caching",
      to: "/blog/2018-04-22-intel-smart-response-technology-ssd-caching"
    },
    {
      from: "/intel-smart-response-technology-ssd-caching",
      to: "/blog/2018-04-22-intel-smart-response-technology-ssd-caching"
    },
    {
      from: "/blog/2016/09/22/iphone-upgrade-program-and-t-mobile.html",
      to: "/blog/2018-04-22-iphone-upgrade-program-and-t-mobile"
    },
    {
      from: "/iphone-upgrade-program-and-t-mobile",
      to: "/blog/2018-04-22-iphone-upgrade-program-and-t-mobile"
    },
    {
      from: "/blog/2016/08/01/building-a-super-fast-site-part-1-optimize-post-images.html",
      to: "/blog/2018-04-22-building-a-fast-static-site-part-1-optimize-post-images"
    },
    {
      from: "/building-a-fast-static-site-part-1-optimize-post-images",
      to: "/blog/2018-04-22-building-a-fast-static-site-part-1-optimize-post-images"
    },
    {
      from: "/blog/2016/07/17/docker-and-macos-sierra.html",
      to: "/blog/2018-04-22-docker-and-macos-sierra"
    },
    {
      from: "/docker-and-macos-sierra",
      to: "/blog/2018-04-22-docker-and-macos-sierra"
    },
    {
      from: "/a-new-start",
      to: "/blog/2018-04-22-a-new-start"
    },
    {
      from: "/how-to-easily-add-prism-to-ghost-blog",
      to: "/blog/2018-04-22-how-to-easily-add-prism-to-ghost-blog"
    },
    {
      from: "/projects/wiagencies",
      to: "/projects/world-insurance"
    },
    {
      from: "/projects/westpointrealtors",
      to: "/projects/west-point-real-estate"
    },
  ]

  redirects.forEach(({ from, to }) => {
    createRedirect({
      fromPath: from,
      toPath: to,
      isPermanent: true,
    })
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const templateTypes = {
    blog: "template-blog-post.js",
    projects: "template-project.js",
  }
  const templateRegex = /\/(blog|projects)\//

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
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
              description
            }
            fileAbsolutePath
          }
        }
      }
    }
  `
).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const template = templateTypes[
        node.fileAbsolutePath.match(templateRegex)[1]
      ]

      createPage({
        path: node.fields.slug,
        component: path.resolve(`${__dirname}/src/templates/${template}`),
        context: {
          id: node.id,
        },
      })
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })
}
