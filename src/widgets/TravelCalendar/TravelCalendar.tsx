'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Button } from '@/shared/ui/Button'
import PlusIcon from '@icons/plus.svg'
import './AppCalendar.scss'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export const TravelCalendar = () => {
	const [value, onChange] = useState<Value>(new Date())

	return (
		<div
			className='w-[350px] flex flex-col gap-y-4 p-6
		border border-solid border-neutral-20 shadow-calendar'
		>
			<Button startIcon={PlusIcon} variant='outlined' className='border-neutral-20!'>
				Купити квиток
			</Button>
			<Calendar value={value} onChange={onChange} locale='uk-UA' className='app-calendar' />
		</div>
	)
}
