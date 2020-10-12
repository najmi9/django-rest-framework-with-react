import axios from 'axios';
import {API_URL} from '../Config';

const POST_API = API_URL + '/contacts';

const createContact = async (data) =>{
	const res = await axios.post(POST_API, data);
	return await res.data;
}
export {
	createContact
}