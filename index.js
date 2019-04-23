void{}

import { ITrust, IResolve } from './src'

window && window.itrust = () => {
	const trustee = document.getElementById('trustee').value

	ITrust
	.claim('i', trustee)
	.then(result => IResolve.resolve('i', result), reason => alert('Better not trust: ' + reason))
}