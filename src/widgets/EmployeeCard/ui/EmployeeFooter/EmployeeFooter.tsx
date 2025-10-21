import InstagramIcon from '@icons/socials/instagram.svg'
import TwitterIcon from '@icons/socials/twitter.svg'
import { EmployeeSocialLink } from '../../components/EmployeeSocialLink'

interface EmployeeFooterProps {
	socials: {
		instagram?: string
		twitter?: string
	}
}

export const EmployeeFooter = ({ socials }: EmployeeFooterProps) => {
	return (
		<div className='flex items-center gap-x-4 text-neutral-80'>
			{socials.instagram && <EmployeeSocialLink href={socials.instagram} icon={InstagramIcon} />}
			{socials.twitter && <EmployeeSocialLink href={socials.twitter} icon={TwitterIcon} />}
		</div>
	)
}
