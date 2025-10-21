import type { ImageType } from '@/shared/lib/types/common'
import DriverAvatar from '@images/driver-avatar.png'

export type DriverType = {
	id: number
	avatarLink: ImageType
	fullName: string
	description: string
	socials?: {
		instagram?: string
		twitter?: string
	}
}

export const DRIVERS: DriverType[] = [
	{
		id: 1,
		avatarLink: null,
		fullName: 'Олександр',
		description: 'Досвід роботи: 5 років',
		socials: { instagram: '', twitter: '' }
	},
	{
		id: 2,
		avatarLink: null,
		fullName: 'Володимир',
		description: 'Досвід роботи: 7 років',
		socials: { instagram: '', twitter: '' }
	},
	{
		id: 3,
		avatarLink: null,
		fullName: 'Ірина',
		description: 'Досвід роботи: 1 рік',
		socials: { instagram: '', twitter: '' }
	},
	{
		id: 4,
		avatarLink: null,
		fullName: 'Михайло',
		description: 'Досвід роботи: 1 рік',
		socials: { instagram: '', twitter: '' }
	},
	{
		id: 5,
		avatarLink: DriverAvatar,
		fullName: 'Юлія',
		description: 'Досвід роботи: 2 роки',
		socials: { instagram: '', twitter: '' }
	}
]
