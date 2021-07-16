import { variables } from '../../../../../lib/variables';

export async function get() {
	const result = await fetch(`${variables.apiUrl}/plant/watering`);
	const data = await result.json();

	return {
		body: data
	};
}
