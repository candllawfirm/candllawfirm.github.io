module.exports = {
  siteMetadata: {
    title: `Law Office C&L`,
    description: `법률사무소 씨앤엘 - 믿고 기댈 수 있는 든든한 법률파트너`,
    author: `@deokpyo`,
    phoneNumber: "041-417-7417",
    faxNumber: "",
    businessNameKorean: "법률사무소 씨앤엘",
    businessId: "546-23-00470",
    businessHours: "09:00~18:00 / 주말 공휴일 휴무",
    emailAddress: "candllaw@naver.com",
    officeAddress: "충남 천안시 동남구 청수5로 4 더다움트윈브릿지 A동 402호",
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
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
        name: `care-and-loyalty-law-firm-website`,
        short_name: `candl`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo_tree.png`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
