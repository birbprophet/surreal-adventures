require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Surreal Adventures`,
    description: `Create surreal adventures with friends.`,
    author: `Benjamin Tang <benjamin.tang.hz@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    /*{
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: false,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false,
          analytics: true,
        },
        credentials: {
          apiKey: "AIzaSyAnDq91hzKvQR5mzOVKX4W2_JgWwVvIHCI",
          authDomain: "surreal-adventures.firebaseapp.com",
          databaseURL: "https://surreal-adventures.firebaseio.com",
          projectId: "surreal-adventures",
          storageBucket: "surreal-adventures.appspot.com",
          messagingSenderId: "833716284248",
          appId: "1:833716284248:web:0566c1ced8d4bd1596932d",
          measurementId: "G-SCYL8X7063",
        },
      },
    },*/
    `gatsby-plugin-postcss`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true, // Print removed selectors and processed file names
        // develop: true, // Enable while using `gatsby develop`
        tailwind: true, // Enable tailwindcss support
        whitelist: ["Typist", "Cursor--blinking", "Cursor"], // Don't remove this selector
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
      },
    },
  ],
}
