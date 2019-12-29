module.exports = {
  siteMetadata: {
    title: 'Katie Langerman | Designer who codes',
    description: 'Katie Langerman is a hybrid UI/UX designer/developer based in Boston, MA',
    author: '@langermank',
  },
  plugins: [
    'gatsby-plugin-mdx',
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
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop', 'build-javascript'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'src/utils/typography',
    //   },
    // },
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
    // {
    //   resolve: "gatsby-plugin-web-font-loader",
    //   options: {
    //     custom: {
    //       families: ["Lato, Aleo Bold"],
    //       urls: ["/fonts/fonts.css"],
    //     },
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
