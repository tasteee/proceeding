import { shhhh } from '../packages/shhhh'

const getAttributeValue = (self: HTMLElement) => {
	return (attributeName: string, fallback?: string) => {
		return self.getAttribute(attributeName) || fallback
	}
}

type CustomElementT = {
	get attributeValue(): Record<string, string>
	getAttributeValue(attributeName: string, fallback?: string): string
}

class CustomElement extends HTMLElement {
	getAttributeValue = getAttributeValue(this)

	get attributeValue() {
		const attributeProxy = new Proxy(this, {
			get(target, attributeName: string) {
				return target.getAttributeValue(attributeName)
			},
		})

		return attributeProxy as unknown as Record<string, string>
	}
}

type CustomElementInitializerT = (options: CustomElementOptions, self: CustomElement) => void

type CustomElementOptions = {
	tagName: string
	initialize: CustomElementInitializerT
}

export const registerElement = (options: CustomElementOptions) => {
	const existingElement = customElements.get(options.tagName)
	if (existingElement) shhhh.warn(`#NL<${options.tagName}/> $SEP previously registered.$NL`)

	class Element extends CustomElement {
		constructor() {
			super()
			options.initialize(options, this)
		}
	}

	const successMessage = `#NL<${options.tagName}/> $SEP registered successfully.$NL`
	const errorMessage = `#NL<${options.tagName}/> $SEP failed to register.$NL`

	try {
		customElements.define(options.tagName, Element)
		shhhh.log(successMessage)
	} catch (error) {
		shhhh.error(errorMessage, error)
	}
}
