import axios from "axios";

// create base URL to make the requests to the database
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;
