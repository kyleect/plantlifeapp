export async function get({params}) {
    const result = await fetch(`http://localhost:3001/plant/${params.id}`).then(res => res.json());

    return {
        body: result
    };
}
