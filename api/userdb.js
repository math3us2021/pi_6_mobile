import axios from 'axios';
import {apiBase} from "../constantes";

export const saveUser = async (user) => {
    const options = {
        method: 'POST',
        url: apiBase + '/users',
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
