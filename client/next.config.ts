import { NextConfig } from 'next'

const config: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`
      }
    ]
  }
}

export default config
