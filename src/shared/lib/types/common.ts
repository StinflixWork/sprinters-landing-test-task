import type { FC, SVGProps } from 'react'
import type { StaticImageData } from 'next/image'

export type SvgType = FC<SVGProps<SVGSVGElement>>
export type ImageType = StaticImageData | string | null
