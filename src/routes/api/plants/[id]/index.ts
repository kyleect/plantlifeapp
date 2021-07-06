export async function get({params}) {
    const result = await fetch(`http://localhost:3001/plant/${params.id}`).then(res => res.json());

    return {
        body: result
    };
}

export async function del({params}) {
    const result = await fetch(`http://localhost:3001/plant/${params.id}`, {
        method: "DELETE"
    });

    return {
        body: result
    };
}

export async function patch({params, body}) {
    const result = await fetch(`http://localhost:3001/plant/${params.id}`, {
        method: "PATCH",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json());

    return {
        body: result
    };
}