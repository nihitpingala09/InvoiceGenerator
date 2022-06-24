window.addEventListener('load', () => {
	const params = (new URL(document.location)).searchParams;
	const name = params.get('name');

	document.getElementById('invoice-name').innerHTML = name;
	document.getElementById('invoice-name-again').innerHTML = name;
})

