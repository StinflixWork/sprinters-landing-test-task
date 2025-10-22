'use client'

import { useState } from 'react'
import { BurgerButton } from '@/shared/ui/BurgerButton'
import { Container } from '@/shared/ui/Container'
import { Logo } from '@/shared/ui/Logo'
import { Navigation } from '../Navigation'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const handleOpenBurgerMenu = () => {
		setIsOpen(prevOpen => !prevOpen)
		document.body.classList.toggle('lock')
	}

	return (
		<header className='h-header'>
			<Container className='h-full flex items-center justify-between gap-x-12'>
				<Logo />
				<Navigation isOpen={isOpen} />
				<BurgerButton isOpen={isOpen} onClick={handleOpenBurgerMenu} />
			</Container>
		</header>
	)
}
