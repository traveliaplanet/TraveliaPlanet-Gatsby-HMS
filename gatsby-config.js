const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://traveliaplanet.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;
const path = require('path');

const gatsbyRequiredRules = path.join(
  process.cwd(),
  'node_modules',
  'gatsby',
  'dist',
  'utils',
  'eslint-rules'
);

const importAlias = {
  components: path.resolve(__dirname, 'src/components')
};

// const strapiConfig = {
//   apiURL: `http://0.0.0.0:1337`,
//   accessToken: `dedf0b90b36f1a0e0f23e1aaac7b78ba8d914bcc59a1608e47735131022d97058753adf92ff32a440e10f9c0cd2d473f84ac356e00ac4e889f3c9bb3a5c69ec2526d05c746def25f83ba7f5273876b4be615d98754b6e08a3d1125daa4e4bfcfbfd6bfd66fa8ad99b0af7a2e02c42802e4547257daed36522d25a9faee5f9c82`,
//   collectionTypes: [`destination`, `testimonial`],
//   singleTypes: []
// };

module.exports = {
  siteMetadata: {
    title: `North Tours, Kashmir Tours, Naran & Kaghan Tours, Skardu Tours, Gilgit Baltistan Tours`,
    description: `Travelia Planet offers best North Tours, Kashmir Tours, Naran & Kaghan Tours, Skardu Tours, Gilgit Baltistan Tours and many more with attractive discounts.`,
    author: `@hussainmshah`,
    siteUrl
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-postcss',
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: strapiConfig
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Travelia Planet`,
        short_name: `Tourism`,
        start_url: `/`,
        background_color: `#FFFF`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        // Gatsby required rules directory
        rulePaths: [gatsbyRequiredRules],
        // Default settings that may be ommitted or customized
        stages: ['develop'],
        extensions: ['js'],
        exclude: ['node_modules', 'bower_components', '.cache', 'public']
        // Any additional eslint-webpack-plugin options below
        // ...
      }
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: importAlias,
        extensions: []
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: 'https://traveliaplanet.com',
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*' }]
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null
          }
        }
      }
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     // The property ID; the tracking code won't be generated without it
    //     trackingId: 'G-MPVWF3MQ6D'
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-google-gtag`,
    //   options: {
    //     // You can add multiple tracking ids and a pageview event will be fired for all of them.
    //     trackingIds: ['G-MPVWF3MQ6D']
    //   }
    // },

    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        resolveSiteUrl: () => 'https://traveliaplanet.com'
      }
    },

    // DATO CMS
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area. Make sure to grant both CDA and CMA permissions.
        apiToken: `2725199cb5ba9e7c99618d011ffa78`,

        // The project environment to read from. Defaults to the primary environment:
        environment: `main`,

        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,

        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,

        // Custom API base URL (you probably don't need this!)
        // apiUrl: 'https://site-api.datocms.com',

        // Limits page size and can be used to avoid build timeouts.
        // Default is 500 (also the maximum)
        pageSize: 500
      }
    }
  ]
};
