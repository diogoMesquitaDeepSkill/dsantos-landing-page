/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dsantos.de", // Make sure this is correct
  generateRobotsTxt: true, // Generates a robots.txt file
  generateIndexSitemap: false, // Don't generate an empty sitemap index
  changefreq: "daily",
  priority: 1.0,

  // Manually define localized pages
  additionalPaths: async (config) => {
    return [
      { loc: "/en", changefreq: "daily", priority: 1.0 },
      { loc: "/pt", changefreq: "daily", priority: 1.0 },
      { loc: "/de", changefreq: "daily", priority: 1.0 },
      { loc: "/fr", changefreq: "daily", priority: 1.0 },
      { loc: "/ru", changefreq: "daily", priority: 1.0 },
    ];
  },
};
