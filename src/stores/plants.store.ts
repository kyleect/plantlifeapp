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
