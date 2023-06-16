const path = require('path')
require('dotenv').config()

const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.experiments = {
            asyncWebAssembly: true,
            layers: true,
        }
        config.resolve.alias['@'] = path.join(__dirname, 'app')
        return config
    },
    env: {
        TOKEN: process.env.TOKEN,
        SECRET: process.env.SECRET,
        TOKUNAGA_ID: process.env.TOKUNAGA_ID,
    },
}

module.exports = nextConfig
