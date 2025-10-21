import type { PropsWithChildren } from 'react'
import { Footer } from '../Footer/ui/Footer'
import { Header } from '../Header'

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<div className='relative min-h-dvh flex flex-col overflow-clip'>
			<Header />
			<main className='flex-auto'>{children}</main>
			<Footer />
		</div>
	)
}
