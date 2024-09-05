// import { helpers } from './customs/helpers';
// import { CustomElement } from './customs/customElement';

// class FlexRow extends CustomElement {
//   connectedCallback() {
//     this.style.display = 'flex';
//     this.style.flexDirection = 'row';

//     const paddingAttributeValue = this.getAttributeValue('padding')
//     const gapAttributeValue = this.getAttributeValue('gap');

//     if (paddingAttributeValue) this.style.padding = helpers.getPadding(paddingAttributeValue)
//     if (gapAttributeValue) this.style.gap = helpers.getPadding(gapAttributeValue)
//   }
// }

// customElements.define('flex-row', FlexRow);

import { helpers } from './customs/helpers'
import { registerElement } from './customs/customElement'

registerElement({
	tagName: 'flex-row',
	initialize: (options, self) => {
		self.style.display = 'flex'
		self.style.flexDirection = 'row'

		const paddingValue = self.attributeValue.padding
		const gapValue = self.attributeValue.gap

		if (paddingValue) self.style.padding = helpers.getPadding(paddingValue)
		if (gapValue) self.style.gap = helpers.getPadding(gapValue)
	},
})
