import axios from 'axios';
import {API_URL} from '../Config';

const COURSE_API = API_URL + '/courses';

const fetchCourses = async () =>{
    const response = await axios.get(COURSE_API);
    console.log(response)
	return await response.data
}

const fetchCourse = async (id) =>{
    const response = await axios.get(COURSE_API+'/' + id);
	return await response.data
}

export {
	fetchCourses,
	fetchCourse,
}