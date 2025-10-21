export type MenuType = {
	id: number
	title: string
	href: string
}

export const MENU: MenuType[] = [
	{ id: 1, title: 'Головна', href: '/' },
	{ id: 2, title: 'Перевізникам', href: '/drivers' },
	{ id: 3, title: 'Про нас', href: '/about' },
	{ id: 4, title: 'Профіль перевізника', href: '/profile' }
]
