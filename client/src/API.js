const API_URL = 'http://localhost:3002';

export async function createdPosts() {
    const response = await fetch(`${API_URL}/api/posts`);
    return response.json();
}

export async function newPosts(posts) {
    const response = await fetch(`${API_URL}/api/posts`, {
        method: 'POST',
        headers: {
            'content-type': 'app/json',
        },
        body: JSON.stringify(posts),
    });
    return response.json();
}