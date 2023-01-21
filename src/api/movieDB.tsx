import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'8cac62687ece0c2c0e1ba4cc7c21489d',
        language: 'es-ES',
    }
});

export default movieDB;