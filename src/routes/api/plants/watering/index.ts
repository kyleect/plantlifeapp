export async function get() {
	const result = await fetch(`${process.env.API_URL}/plant/watering`);
	const data = await result.json();

	return {
		body: data
	};
}
