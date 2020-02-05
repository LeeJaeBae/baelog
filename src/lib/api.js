import axios from "axios";

export const writePost = ({ title, body, tags }) =>
  axios.post("http://localhost:4000/api/post", { title, body, tags });
export const getPost = id =>
  axios.get(`http://loaclhost:4000/api/post/${id}`, "test");
