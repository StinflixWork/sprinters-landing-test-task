import Image from 'next/image'
import Link from 'next/link'
import { COUNTRIES } from '@/shared/const/countries.data'
import { Button } from '@/shared/ui/Button'
import { Container } from '@/shared/ui/Container'
import { Flag } from '@/shared/ui/Flag'
import { Heading } from '@/shared/ui/Heading'
import { TravelCalendar } from '@/widgets/TravelCalendar'
import ArrowDownIcon from '@icons/arrow-down.svg'
import FacebookIcon from '@icons/socials/facebook.svg'
import TwitterIcon from '@icons/socials/twitter.svg'
import Car1 from '@images/cars/car-1.png'
import Car2 from '@images/cars/car-2.png'
import Car3 from '@images/cars/car-3.png'

export const AboutProfileSection = () => {
	return (
		<section className='py-10 md:py-[75px]'>
			<Container className='flex flex-col gap-x-14 gap-y-5 lg:flex-row overflow-visible'>
				<div className='flex-auto'>
					<div className='mb-6'>
						<Heading as='h3' className='mb-4'>
							Опис перевізника
						</Heading>
						<p className='text-neutral-80'>
							Stripe is a software platform for starting and running internet businesses. Millions
							of businesses rely on Stripe’s software tools to accept payments, expand globally, and
							manage their businesses online. Stripe has been at the forefront of expanding internet
							commerce, powering new business models, and supporting the latest platforms, from
							marketplaces to mobile commerce sites. We believe that growing the GDP of the internet
							is a problem rooted in code and design, not finance. Stripe is built for developers,
							makers, and creators. We work on solving the hard technical problems necessary to
							build global economic infrastructure—from designing highly reliable systems to
							developing advanced machine learning algorithms to prevent fraud.
						</p>
					</div>
					<div className='mb-10'>
						<Heading as='h3' className='mb-4 text-center sm:text-start'>
							Ми у соц. мережах
						</Heading>
						<div className='flex flex-col gap-4 sm:flex-row'>
							<Button variant='outlined' startIcon={TwitterIcon}>
								<Link href='https://x.com/stripe'>twitter.com/stripe</Link>
							</Button>
							<Button variant='outlined' startIcon={FacebookIcon}>
								<Link href='https://www.facebook.com/StripeHQ'>facebook.com/StripeHQ</Link>
							</Button>
						</div>
					</div>
					<div className='flex flex-col gap-3'>
						<div className='w-full aspect-auto md:h-[240px]'>
							<Image src={Car1} alt='car 1' className='w-full h-full object-cover' />
						</div>
						<div className='w-full aspect-auto md:h-[240px]'>
							<Image src={Car2} alt='car 2' className='w-full h-full object-cover' />
						</div>
						<div className='w-full aspect-auto md:h-[240px]'>
							<Image src={Car3} alt='car 3' className='w-full h-full object-cover' />
						</div>
					</div>
				</div>
				<div
					className='shrink-0 flex flex-col gap-x-16 gap-y-10 sm:flex-row sm:w-full sm:justify-center
				lg:flex-col lg:justify-start lg:w-[350px]'
				>
					<div>
						<Heading as='h3' className='mb-6'>
							Обслуговуємо країни
						</Heading>
						<div className='flex flex-col gap-y-6'>
							<ul className='grid [grid-template-columns:repeat(auto-fill,minmax(180px,1fr))] gap-4'>
								{COUNTRIES.map(({ id, ...country }) => (
									<li key={id}>
										<Flag {...country} />
									</li>
								))}
							</ul>
							<Button variant='link' className='self-start' endIcon={ArrowDownIcon}>
								Усі країни
							</Button>
						</div>
					</div>
					<div>
						<Heading as='h3' className='mb-4'>
							Календар поїздок
						</Heading>
						<TravelCalendar />
					</div>
				</div>
			</Container>
		</section>
	)
}
