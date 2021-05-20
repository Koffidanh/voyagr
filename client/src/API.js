import axios from "axios";
const API_URL = 'http://localhost:3002';

export async function listNewPosts() {
    const response = await fetch(`${API_URL}/api/posts`);
    return response.json();
  }

// post.password will eventually equal user.password
export async function createNewPost(post) {
    const password = post.password;
    delete post.password;
    const response = await fetch(`${API_URL}/api/posts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'USER_PASS': password, 
      },
      body: JSON.stringify(post),
    });
    let json;
    if (response.headers.get('content-type').includes('text/html')) {
      const message = await response.text();
      json = {
        message,
      };
    } else {
      json = await response.json();
    }
    if (response.ok) {
      return json;
    }
    const error = new Error(json.message);
    error.response = json;
    throw error;
  }


export const API = {
    savePost: (post) => axios.post("/api/posts", post)
}
