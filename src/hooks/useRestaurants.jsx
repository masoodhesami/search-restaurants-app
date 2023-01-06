import { useState } from "react";
import axios from "../api/axios";

export default () => {
    const [results, setResults] = useState({ data: [], loading: false });

    const searchRestaurants = async () => {
        setResults({ data: [], loading: true })
        try {
            const response = await axios.get('/api/restaurants');
            setResults({ data: response.data, loading: false });
        }
        catch (error) {
            console.log(error);
        }
    }
    return [results, searchRestaurants]
}