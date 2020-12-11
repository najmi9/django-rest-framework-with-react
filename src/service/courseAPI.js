import axios from 'axios';
import { API_URL } from '../Config';

const COURSE_API = API_URL + '/courses';
const CHAPTER_API = API_URL + '/chapters';

const fetchCourses = async () => {
	const response = await axios.get(COURSE_API);
	console.log(response)
	return await response.data
}

const fetchCourse = async (slug) => {
	const response = await axios.get(COURSE_API + '/' + slug + "/data/");
	console.log(response)
	return await response.data
}

const fetchChaptersForCourse = async (slug) => {
	const response = await axios.get(COURSE_API + '/' + slug + '/' + 'chapters/');
	console.log(await response)

	return await response.data;
}

const fecthChapter = async (id) => {
	const res = await axios.get(CHAPTER_API + '/' + id);
	console.log(await res)

	return await res.data

}

export {
	fetchCourses,
	fetchCourse,
	fetchChaptersForCourse,
	fecthChapter
}