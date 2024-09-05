const shhhhFormat = (string: string) => {
	const withSpaces = string.replace(/#NL/g, '\n\n')
	const withSeparators = withSpaces.replace(/#SEP/g, '👉')
	return withSeparators
}

const shhhhFormatter = (args: any[]) => {
	const formattedArgs = args.map((arg) => {
		const isString = typeof arg === 'string'
		if (!isString) return arg
		return shhhhFormat(arg)
	})

	return formattedArgs.join('')
}

const CONSOLE_METHODS_MAP = {
	log: console.log,
	warn: console.warn,
	error: console.error,
	info: console.info,
	debug: console.debug,
	trace: console.trace,
	table: console.table,
}

const shhhhLog = (type: keyof typeof CONSOLE_METHODS_MAP, args: any[]) => {
	const method = CONSOLE_METHODS_MAP[type]
	method(args)
}

export const shhhh = {
	log: (...args: any[]) => shhhhLog('log', shhhhFormatter(args)),
	warn: (...args: any[]) => shhhhLog('warn', shhhhFormatter(args)),
	error: (...args: any[]) => shhhhLog('error', shhhhFormatter(args)),
	info: (...args: any[]) => shhhhLog('info', shhhhFormatter(args)),
	debug: (...args: any[]) => shhhhLog('debug', shhhhFormatter(args)),
	trace: (...args: any[]) => shhhhLog('trace', shhhhFormatter(args)),
	table: (...args: any[]) => shhhhLog('table', shhhhFormatter(args)),
}
