const withRpc = require('next-rpc')();

const withPWA = require('next-pwa')({
  dest: 'public'
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withRpc(withPWA(nextConfig))
