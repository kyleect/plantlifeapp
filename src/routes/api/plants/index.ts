export async function get() {
	const result = await fetch(`${process.env.API_URL}/plant`);
	const data = await result.json();

	return {
		body: data
	};
}

export async function post(request) {
	const result = await fetch(`${process.env.API_URL}/plant`, {
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
