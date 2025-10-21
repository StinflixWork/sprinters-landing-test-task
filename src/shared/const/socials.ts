export type SocialMediaType = 'facebook' | 'instagram' | 'dribble' | 'linkedin' | 'twitter'

export type SocialType = {
	id: number
	type: SocialMediaType
	url: string
}

export const SOCIALS: SocialType[] = [
	{ id: 1, type: 'facebook', url: '#' },
	{ id: 2, type: 'instagram', url: '#' },
	{ id: 3, type: 'dribble', url: '#' },
	{ id: 4, type: 'linkedin', url: '#' },
	{ id: 5, type: 'twitter', url: '#' }
]
