const path = require('path')

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
}

module.exports = nextConfig
