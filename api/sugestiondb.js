import axios from 'axios';
import {apiBase} from "../constantes";

export const sugestiondb = async (id) => {
    const options = {
        method: 'POST',
        url: apiBase + '/sugestion',
        data: { 'id': id },
    };
    try{
        const response = await axios.request(options);
        return response.data;
    }catch (e) {
        throw e;
    }
}
