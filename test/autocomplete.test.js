const waitFor = (selector) => {
	return new Promise((resolve, reject) => {
		const interval = setInterval(() => {
			if (document.querySelector(selector)) {
				clearInterval(interval);
				clearTimeout(timeout);
				resolve();
			}
		}, 30);

		const timeout = setTimeout(() => {
			clearInterval(interval);
			reject();
		}, 2000);
	});
};

beforeEach(() => {
	document.querySelector('#target').innerHTML = '';
	createAutocomplete({
		root: document.querySelector('#target'),
		fetchData() {
			return [
				{ Title: 'Batman ' },
				{ Title: 'Inception ' },
				{ Title: 'Ironman ' },
			];
		},
		renderOption(movie) {
			return movie.Title;
		},
	});
});

it('Dropdown starts closed', () => {
	const dropdown = document.querySelector('.dropdown');
	chai.expect(dropdown.className).not.to.include('is-active');
});

it('Dropdown opens up after searching', async () => {
	const input = document.querySelector('input');
	input.value = 'Batman';
	input.dispatchEvent(new Event('input'));

	await waitFor('.dropdown-item');

	const dropdown = document.querySelector('.dropdown');
	chai.expect(dropdown.className).to.include('is-active');
});

it('Displays results after searching', async () => {
	const input = document.querySelector('input');
	input.value = 'Batman';
	input.dispatchEvent(new Event('input'));

	await waitFor('.dropdown-item');

	const items = document.querySelectorAll('.dropdown-item');

	chai.expect(items.length).to.equal(3);
});
