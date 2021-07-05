import { writable } from 'svelte/store';

const plants = writable([]);

export default plants;

export async function loadPlants(fetch) {
    const url = `/api/plants`;
    const res = await fetch(url);

    if (res.ok) {
        const data = await res.json();
        plants.set(data);
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