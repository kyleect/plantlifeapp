export async function get() {
	const result = await fetch('http://localhost:3001/kind').then((res) => res.json());

	return {
		body: result
	};
}

export async function post(request) {
	const result = await fetch('http://localhost:3001/kind', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(request.body)
	}).then((res) => res.json());

	return {
		body: result
	};
}