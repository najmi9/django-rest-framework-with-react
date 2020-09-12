import React, { useState, useEffect } from 'react';
import {fetchCourses } from '../service/courseAPI';
import CourseItem from '../Components/course_item';

const Courses = () => {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(()=>{
		fetchCourses().then(response=>{
			setCourses(response)
			setLoading(true)
		}).catch(e=>console.log(e))
	}, []);
    return (
        <div>
         <section>
          { !loading && (  <spinning-dots style={{"width":200+"px", "strokeWidth":20+"px", "color": "#535FF6"}} dots="8">
   </spinning-dots>) }
        </section>
        <section>
          { loading && (<div> {courses.map(course=>(<CourseItem course={course} />))} </div>)  }
        </section>
        </div>
    );
};


export default Courses;

