const faqs = document.querySelectorAll('details');

console.log(faqs);

faqs.forEach((detail) => {
	detail.addEventListener('toggle', () => {
		if (detail.open) {
			console.log('i am open');
			/* the element was toggled open */
		} else {
			console.log('i am closed');
			/* the element was toggled closed */
		}
	});
});
