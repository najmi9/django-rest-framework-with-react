import { courses, chapters } from './test';

const fetchCourses = async () =>{
  
	return courses;

}

const fetchCourse = async (slug) =>{
    
	return courses[1];
}

const fetchChaptersForCourse = async (slug) =>{

	return chapters;
}

const fecthChapter = async (id) =>{
	return chapters[parseInt(id)-1]
}

export {
	fetchCourses,
	fetchCourse,
	fetchChaptersForCourse,
	fecthChapter
}