export async function get() {
	const result = await fetch('http://localhost:3001/plant/watering');
	const data = await result.json();

	return {
		body: data
	};
}
