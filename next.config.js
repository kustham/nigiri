/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    mode: 'production',
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    rules: [
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    ],
}
module.exports = nextConfig
