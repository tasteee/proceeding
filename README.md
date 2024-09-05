# proceeding

```
git clone https://github.com/tasteee/proceeding.git [dir-name]
cd [dir-name]
yarn
yarn dev
```

## Helpful Stuff

### Getting global Geist variables

If you want to get ahold of the CSS variables for the Geist fonts,
you can attach them to the `html` element and then alias them inside
of a global stylesheet, like so:

```css
/* someGlobalStyles.css */

body {
	--fontSans: var(--font-geist-sans);
	--fontMono: var(--font-geist-mono);
	font-family: var(--fontSans);
}
```

```js
// layout.jsx
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

const classNames = `${GeistSans.variable} ${GeistMono.variable}`

const RootLayout = (props) => {
	return (
		<html lang="en" className={classNames}>
			<body>{props.children}</body>
		</html>
	)
}
```

Otherwise, it is virtually impossible to reference the Geist
variables from CSS, because the variable names they provide
are dynamically generated and if you hardcode them, they
will change in the future and mess you uppp.
