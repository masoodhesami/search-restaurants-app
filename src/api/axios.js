import axios from "axios";

export default axios.create({
    baseURL: "https://restaurants-server-app.vercel.app",
})