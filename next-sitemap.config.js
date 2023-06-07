/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.agni.ninja',
    generateRobotsTxt: true,
    sitemapSize: 7000,
}
