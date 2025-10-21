import type { SocialMediaType } from '@/shared/const/socials'
import type { SvgType } from '@/shared/lib/types/common'
import DribbleIcon from '@icons/socials/dribble.svg'
import FacebookIcon from '@icons/socials/facebook.svg'
import InstagramIcon from '@icons/socials/instagram.svg'
import LinkedinIcon from '@icons/socials/linkedin-2.svg'
import TwitterIcon from '@icons/socials/twitter.svg'

const socialIcons: Record<SocialMediaType, SvgType> = {
	facebook: FacebookIcon,
	instagram: InstagramIcon,
	dribble: DribbleIcon,
	linkedin: LinkedinIcon,
	twitter: TwitterIcon
}

export const getSocialIcon = (type: SocialMediaType): SvgType => socialIcons[type]
