module.exports = {
  siteMetadata: {
    site: `techmunchies`,
    siteUrl: `https://techmunchies.net`,
    title: `take a byte`,
    subtitle: `seriously`,
    description: `software engineering for web apps, embedded systems, and mobile`,
    author: `@techmunchies`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 640,
              withWebp: true,
            }
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-code-buttons`,
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: 'Dark+ (default dark)',
              prefersDarkTheme: 'Dark+ (default dark)',
              prefersLightTheme: 'Light+ (default light)',
              injectStyles: true,
            },
          },
        ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `techmunchies`,
        short_name: `tm`,
        start_url: `/`,
        background_color: `#CCC`,
        theme_color: `#4A4A4A`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`,
        legacy: false,
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-emotion`,
    // `gatsby-plugin-sri`, // Issues with certain SRI hashes for webpack, etc.
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-netlify-functions`,
      options: {
        functionsSrc: `${__dirname}/src/lambda`,
        functionsOutput: `${__dirname}/lambda`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/*": [
            "Cache-Control: public, max-age=31536000, immutable",
            "Content-Security-Policy: script-src 'self' 'unsafe-inline'",
            "Referrer-Policy: same-origin",
            "Strict-Transport-Security: max-age=31536000; includeSubDomains; preload",
          ],
          "/*.js": [
            "X-Content-Type-Options: nosniff",
          ],
          "/sw.js": [
            "Cache-Control: no-cache",
          ],
          "/*.html": [
            "Cache-Control: no-cache",
            "X-Frame-Options: DENY",
            "X-XSS-Protection: 1; mode=block",
          ],
        },
        allPageHeaders: [],
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
        transformHeaders: (headers, path) => headers,
        generateMatchPathRewrites: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
