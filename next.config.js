/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
  
  // Azureデプロイ用設定
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // 環境変数の設定
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // 静的ファイルの最適化
  experimental: {
    optimizeCss: true,
  }
}

module.exports = nextConfig
