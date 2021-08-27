// import dotenv from 'dotenv';
// dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `Tynan Boyd`,
    siteURL: `https://tynanboyd.com`,
    description: 'A friendly web developer fellow in Edmonton, Alberta, Canada',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
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
    `gatsby-transformer-remark`,
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
