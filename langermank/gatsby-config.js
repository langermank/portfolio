module.exports = {
  siteMetadata: {
    title: 'Katie Langerman | Designer who codes',
    description: 'Katie Langerman is a hybrid UI/UX designer/developer based in Boston, MA',
    author: '@langermank',
    siteUrl: 'https://langermank.com',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600
            },
          },
        ],
      },
    },
    '@pauliescanlon/gatsby-mdx-embed',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/static/fonts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'texts',
        path: `${__dirname}/src/text`,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/kfavicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
