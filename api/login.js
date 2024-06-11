import axios from 'axios';
import {apiBase} from "../constantes";

export const loginPost = async (user) => {
    const options = {
        method: 'POST',
        url: apiBase + '/login',
        data: user,
    };
    try{
        const response = await axios.request(options);
        return response.data;
    }catch (e) {
        console.error(e);
        return {}
    }
}
