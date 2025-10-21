import { SOCIALS } from '@/shared/const/socials'
import { getSocialIcon } from '@/shared/lib/utils/getSocialIcon'
import { Container } from '@/shared/ui/Container'
import { Divider } from '@/shared/ui/Divider'
import { Logo } from '@/shared/ui/Logo'
import { SocialLink } from '@/shared/ui/SocialLink'
import { FooterNavigation } from '../FooterNavigation'

export const Footer = () => {
	return (
		<footer className='bg-dark'>
			<Container>
				<div className='py-16 flex flex-col justify-between gap-x-20 gap-y-10 lg:flex-row'>
					<div className='max-w-[375px] flex flex-col gap-y-10'>
						<Logo isDark />
						<p className='text-xl text-neutral-20'>
							Платформа пошуку перевізників та бронювання поїздок
						</p>
					</div>
					<FooterNavigation />
				</div>
				<Divider direction='horizontal' className='bg-white/10!' />
				<div className='py-10 flex flex-col gap-4 items-center justify-between md:flex-row'>
					<p className='text-white/40 font-medium'>2024 &copy; Sprinters. All rights reserved.</p>
					<ul className='flex gap-6'>
						{SOCIALS.map(({ id, url, type }) => (
							<li key={id}>
								<SocialLink icon={getSocialIcon(type)} href={url} />
							</li>
						))}
					</ul>
				</div>
			</Container>
		</footer>
	)
}
