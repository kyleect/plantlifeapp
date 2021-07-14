import { derived, writable } from 'svelte/store';

const plants = writable([]);

export default plants;

export const wateringPlantIds = writable([]);

export const wateringPlants = derived([plants, wateringPlantIds], ([$plants, $wateringPlantIds]) =>
	$plants.filter((plant) => $wateringPlantIds.includes(plant.id))
);

export async function createPlant(name: string, wateredAt: number, kindId: number) {
	const res = await fetch('/api/plants', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name, wateredAt, kindId })
	});

	if (res.ok) {
		await loadPlants(fetch);
	} else {
		throw new Error(`Error creating plant name=${name}`);
	}
}

export async function loadPlants(fetch) {
	const url = `/api/plants`;
	const res = await fetch(url);

	if (res.ok) {
		const data = await res.json();
		plants.set(data);

		await loadWateringPlantIds(fetch);
	}
}

export async function deletePlant(id: number) {
	const res = await fetch(`/api/plants/${id}`, {
		method: 'DELETE'
	});

	if (res.ok) {
		await loadPlants(fetch);
	} else {
		throw new Error(`Error deleting plant id=${id}`);
	}
}

export async function updatePlant(id: number, name: string, wateredAt: number, kindId: number) {
	debugger;
	const res = await fetch(`/api/plants/${id}`, {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name, wateredAt, kindId })
	});

	if (res.ok) {
		await loadPlants(fetch);
	} else {
		throw new Error(`Error creating plant name=${name} kindId=${kindId}`);
	}
}

export async function waterPlant(id: number) {
	const res = await fetch(`/api/plants/${id}`, {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ wateredAt: Date.now() })
	});

	if (res.ok) {
		await loadPlants(fetch);
	} else {
		throw new Error(`Error watering plant id=${id}`);
	}
}

export async function loadWateringPlantIds(fetch) {
	const res = await fetch(`/api/plants/watering`);

	if (res.ok) {
		const data = await res.json();
		debugger;
		wateringPlantIds.set(data);
	}
}
