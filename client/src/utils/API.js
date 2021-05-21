import axios from "axios";

export const API = {
  savePost: (post) => axios.post("/api/posts", post),

  getPost: (post) => axios.get("api/posts", post)
}
