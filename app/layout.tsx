import type { ReactNode } from 'react'
import { Layout } from '@/widgets/Layout'
import type { Metadata } from 'next'
import { Lato, Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
	subsets: ['cyrillic'],
	display: 'swap'
})

const lato = Lato({
	variable: '--font-lato-sans',
	weight: ['700'],
	subsets: ['latin'],
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Sprinters',
	description: 'Тестове завдання'
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html lang='uk-UA'>
			<body className={`${rubik.className} ${lato.variable} antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}
