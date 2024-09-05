import { REFERENCE_MAPS } from './constants'
import type { RefMapKeysNS } from './constants'

const getSpaceVariable = (key: string) => {
	return REFERENCE_MAPS.SPACE[key as RefMapKeysNS.Space]
}

const getFinalizedValues = (values: string[]) => {
	return values.map((value) => {
		const isSpaceVariable = value.startsWith('$')
		return isSpaceVariable ? getSpaceVariable(value) : value
	})
}

const getPadding = (paddingValue: string) => {
	const values = paddingValue.split(' ')
	const finalValues = getFinalizedValues(values)
	return finalValues.join(' ')
}

export const helpers = {
	getPadding,
}
