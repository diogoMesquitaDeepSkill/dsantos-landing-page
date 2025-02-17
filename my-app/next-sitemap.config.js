/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://dsantos.de", // Change to your main domain
  generateRobotsTxt: true, // Generates a robots.txt file
  exclude: [], // No pages to exclude since all are public
  changefreq: "daily",
  priority: 1.0,
  alternateRefs: [
    { href: "https://dsantos.de/en", hreflang: "en" },
    { href: "https://dsantos.de/de", hreflang: "de" },
    { href: "https://dsantos.de/pt", hreflang: "pt" },
    { href: "https://dsantos.de/fr", hreflang: "fr" },
    { href: "https://dsantos.de/ru", hreflang: "ru" },
  ],
};
