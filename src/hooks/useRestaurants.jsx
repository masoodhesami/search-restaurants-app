import { useState } from "react";
import axios from "../api/axios";

export default () => {
    const [results, setResults] = useState([]);

    const searchRestaurants = async () => {
        try {
            const response = await axios.get('/api/restaurants');
            setResults(response.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    return [results, searchRestaurants]
}