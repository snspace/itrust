/* Vanilla JavaScript implementation of `i:trust` protocol */
/**
 * --------------------------------------------------------------------------
 * ITrust Vanilla (v0.0.1): iresolve.js
 * MIT
 * Abstract: Resolve the `trust` to `i`
 * --------------------------------------------------------------------------
 */

void{}

const VERSION = 'v0.0.1'

class IResolve {
	constructor() {
		this.ui = window ? window : undefined
	}

	// getters

	static get VERSION() {
		return VERSION
	}

	// methods

	resolve(i, trust, options) {
		console && console.log && console.log('IResolve - ' + i + ': ' + trust)

		if (this.ui) {
			this.ui.prompt(i + ': ' + trust)
		}
	}
}

export default IResolve