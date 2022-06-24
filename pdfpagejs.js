window.addEventListener('load', () => {
	const params=(new URL (document.location)).searchParams;
	const name=params.get('editname');
	const des=params.get('description-of-product');
	const quan=params.get('qty');
	const amt=params.get('final-amt');
	// var d=document.getElementById("drop-api");
	// var displayText=d.options[d.selectedIndex].text;
	// document.getElementById("name-of-pdt").value=displayText;

	document.getElementById('name-of-invoice').innerHTML = name;
	document.getElementById('price-of-pdt').innerHTML = des;
	document.getElementById('qty-of-pdt').innerHTML = quan;
	document.getElementById('amount-of-pdt').innerHTML = amt;
	// document.getElementById('name-of-pdt').innerHTML = desc;
})

