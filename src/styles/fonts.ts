import clsx from 'clsx'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

const header = GeistSans
const body = GeistSans
const mono = GeistMono

const rootClassNames = clsx(GeistSans.variable, GeistMono.variable)

export const fonts = {
	rootClassNames,
	header,
	body,
	mono,
}
