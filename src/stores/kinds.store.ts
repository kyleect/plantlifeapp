import { writable } from 'svelte/store';

const kinds = writable([]);

export default kinds;

export async function createKind(name: string) {
	const res = await fetch('/api/kinds', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name })
	});

	if (res.ok) {
		await loadKinds(fetch);
	} else {
		throw new Error(`Error creating plant name=${name}`);
	}
}

export async function loadKinds(fetch) {
	const url = `/api/kinds`;
	const res = await fetch(url);

	if (res.ok) {
		const data = await res.json();

		kinds.set(data);
	}
}

export async function deleteKind(id: number) {
	const res = await fetch(`/api/kinds/${id}`, {
		method: 'DELETE'
	});

	if (res.ok) {
		await loadKinds(fetch);
	} else {
		throw new Error(`Error deleting plant id=${id}`);
	}
}

export async function updateKind(id: number, name: string) {
	const res = await fetch(`/api/kinds/${id}`, {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name })
	});

	if (res.ok) {
		await loadKinds(fetch);
	} else {
		throw new Error(`Error creating kind name=${name}`);
	}
}
