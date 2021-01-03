import React, { useState, useEffect } from 'react';
import { fetchCourses } from '../service/courseAPI';
//import CourseItem from '../Components/course_item';
import { Link } from 'react-router-dom';
import Media from '../components/course/media';
import FinalPage from '../components/FinalPage';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});
    useEffect(() => {
        fetchCourses().then(response => {
            setCourses(response)
            setLoading(true)
        }).catch(e => {
            setError(e)
        })
    }, []);

    const Component = () => {
        return (
            <div>
                {courses.map(course => (
                    <div className="course">

                        <Link to={"/courses-" + course.slug}>
                            <h1> {course.title} </h1>
                            <Media isVideo={course.is_video}
                                title={course.title}
                                media={course.media}
                                width={300}
                                height={300}
                            />
                        </Link>
                        <div>
                            {course.objectifs}
                            <p> lorem ipsum dolor sit</p>
                            <p> lorem ipsum dolor sit</p>
                            <p> lorem ipsum dolor sit</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <FinalPage
            title='courses'
            loading={loading}
            error={error}
            Component={Component}
        />
    );
};


export default Courses;

