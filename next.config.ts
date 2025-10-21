import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	turbopack: {
		rules: {
			'*.complex.svg': {
				loaders: [
					{
						loader: '@svgr/webpack',
						options: { icon: true }
					}
				],
				as: '*.ts'
			},
			'*.svg': {
				loaders: [
					{
						loader: '@svgr/webpack',
						options: {
							icon: true,
							svgoConfig: {
								plugins: [
									{
										name: 'convertColors',
										params: { currentColor: true }
									}
								]
							}
						}
					}
				],
				as: '*.ts'
			}
		}
	}
}

export default nextConfig
