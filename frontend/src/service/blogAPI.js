import axios from 'axios';
import {API_URL} from '../Config';

const POST_API = API_URL + '/posts';

const fetchPosts = async () =>{
	console.log(POST_API)
    const response = await axios.get(POST_API);
	return await response.data
}

const fetchPost = async (id) =>{
    const response = await axios.get(POST_API+'/' + id);
	return await response.data
}

export {
	fetchPosts,
	fetchPost,
}