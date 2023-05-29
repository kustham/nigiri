const path = require('path')
const nextConfig = {
    reactStrictMode: true,
    webpack(config, { isServer }) {
        config.experiments = {
            asyncWebAssembly: true,
            layers: true,
        }
        config.output.webassemblyModuleFilename = `${(isServer ? '../' : '')}static/wasm/[modulehash].wasm`
        config.resolve.alias['@'] = path.join(__dirname, 'app')
        return config
    },
}

module.exports = nextConfig
