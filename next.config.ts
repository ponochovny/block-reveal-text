import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
	basePath: '/block-reveal-text',
	assetPrefix: '/block-reveal-text/',
	images: {
		unoptimized: true,
	},
}
export default nextConfig
