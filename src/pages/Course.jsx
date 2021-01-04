import React, { useEffect, useState } from 'react';
import CourseTemplate from '../components/course/CourseTemplate';
import { fetchCourse, fetchChaptersForCourse } from '../service/courseAPI';

const Course = ({ match }) => {
    const { slug } = match.params;
    const [course, setCourse] = useState({});
    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        try {
            fetchCourse(slug)
                .then(data => setCourse(data));

            fetchChaptersForCourse(slug)
                .then(data => {
                    setChapters(data)
                    setLoading(true);
                });
        } catch (e) {
            setError(e)
        }


    }, [slug]);

    const Component = () => (<CourseTemplate course={course} chapters={chapters} />);

    return (
        <Component />
    );
};

export default Course;
