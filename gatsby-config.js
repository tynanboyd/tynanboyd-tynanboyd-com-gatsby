// import dotenv from 'dotenv';
// dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Tynan Boyd`,
    siteURL: `https://tynanboyd.com`,
    description: 'A friendly web developer fellow in Edmonton, Alberta, Canada',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: '6xgwz43h',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages/blog-images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
