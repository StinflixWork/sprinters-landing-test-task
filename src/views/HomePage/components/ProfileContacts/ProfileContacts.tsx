import { AppLink } from '@/shared/ui/AppLink'
import { Heading } from '@/shared/ui/Heading'
import { Tag } from '@/shared/ui/Tag'
import BrowserIcon from '@icons/browser.svg'
import PhoneIcon from '@icons/phone.svg'

export const ProfileContacts = () => {
	return (
		<div className='flex flex-col gap-y-3'>
			<div className='flex flex-col-reverse items-start gap-3 md:flex-row md:items-center'>
				<Heading as='h2'>Stripe</Heading>
				<div className='shrink-0'>
					<Tag text='43 Поїздок' />
				</div>
			</div>
			<div className='flex flex-wrap items-center gap-x-8 gap-y-4'>
				<AppLink label='https://stripe.com' href='https://stripe.com' icon={BrowserIcon} />
				<AppLink label='+38 (073) 555 55 55' href='tel:+380735555555' icon={PhoneIcon} />
			</div>
		</div>
	)
}
