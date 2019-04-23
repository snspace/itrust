/* Vanilla JavaScript implementation of `i:trust` protocol */
/**
 * --------------------------------------------------------------------------
 * ITrust Vanilla (v0.0.1): itrust.js
 * MIT
 * Abstract: Do claim `i:trust`
 * --------------------------------------------------------------------------
 */

void{}

const VERSION = 'v0.0.1'

class ITrustProtocol {
	constructor() {
		this.protocol = {
			"i": "i:trust",
			"trust": {
				"multiaddr": [
					"/ipfs/QmSJbGxxD8y1ni2dSBQj5SXgGLa2sRLV7wttR2zftJV2jW"
				]
			}
		}
	}
}

class ITrust {
	constructor() {
		super()

		this._ipfs = window ? (window.ibipfs ? window.ibipfs : (window.ipfs ? window.ipfs : undefined)) : undefined
	}

	// getters

	static get VERSION() {
		return VERSION
	}

	static get PROTOCOL() {
		return this.prototype.protocol
	}

	// methods

	static claim(i, object) {
		_search(object)
		.then((findings) => {
			return Promise.resolve({
				"i": i,
			  "trust": findings
			})
		}, (reason) => {
			return Promise.reject(reason)
		})
		.catch((err) => {
			return Promise.reject(err)
		})
		.finally(() => { console.log('Done claiming!') })
	}

	static _search(object) {
		const findings = [
		  new Promise((resolve, reject) => {

		  	if (object || object.name) {
		  		reject('ITrust._search(object) only support `search by name` for now!')
		  	}

		  	if (this._ipfs) {
		  			reject('ITrust._search(object) only works with ipfs in browser!')
		  	}

		  	this
		  	._ipfs
		  	.resolve(object.name)
		  	.then(result => resolve(result), err => reject('Error in ITrust._search(object): ' + err))
		  })
		]

		return Promise.all(findings)
	}
}

export default ITrust

export {
	ITrustProtocol,
	ITrust
}