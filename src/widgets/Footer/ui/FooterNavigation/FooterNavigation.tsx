import Link from 'next/link'
import { AppLink } from '@/shared/ui/AppLink'
import { Button } from '@/shared/ui/Button'
import { Heading } from '@/shared/ui/Heading'
import CallIcon from '@icons/phone.svg'
import SmsIcon from '@icons/sms.svg'
import styles from './FooterNavigation.module.scss'

export const FooterNavigation = () => {
	return (
		<div className={styles.root}>
			<div className={styles.column}>
				<Heading as='h5' className='text-white'>
					Клієнтам
				</Heading>
				<ul className={styles.navigation}>
					<li>
						<Link href='#'>Головна</Link>
					</li>
					<li>
						<Link href='#'>Про нас</Link>
					</li>
					<li>
						<Link href='#'>Ціни</Link>
					</li>
					<li>
						<Link href='#'>Маршрути</Link>
					</li>
					<li>
						<Link href='#'>Політика приватності</Link>
					</li>
				</ul>
			</div>
			<div className={styles.column}>
				<Heading as='h5' className='text-white'>
					Перевізникам
				</Heading>
				<ul className={styles.navigation}>
					<li>
						<Link href='#'>Help Docs</Link>
					</li>
					<li>
						<Link href='#'>Особистий кабінет</Link>
					</li>
					<li>
						<Link href='#'>Оновлення</Link>
					</li>
					<li>
						<Link href='#'>Контакти</Link>
					</li>
				</ul>
			</div>
			<div>
				<Heading as='h5' className='text-white mb-4'>
					Зворотній зв’язок
				</Heading>
				<p className='text-neutral-20'>Маєш пропозиції щодо покращення сервісу - пиши нам!</p>
				<div className={styles.feedback}>
					<input type='text' placeholder='Email Address' className={styles.input} />
					<Button>Надіслати</Button>
				</div>
				<div className='flex flex-col gap-y-2.5'>
					<AppLink
						label='+38 (073) 555 55 55'
						href='tel:+380735555555'
						classes={{ link: 'text-neutral-40! font-normal!', icon: 'text-accent' }}
						icon={CallIcon}
					/>
					<AppLink
						label='gmail@gmail.com'
						href='mailto:gmail@gmail.com'
						classes={{ link: 'text-neutral-40! font-normal!', icon: 'text-accent' }}
						icon={SmsIcon}
					/>
				</div>
			</div>
		</div>
	)
}
