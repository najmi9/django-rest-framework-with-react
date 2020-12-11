import React, { useEffect, useState } from 'react';
import CourseTemplate from '../Components/course/CourseTemplate';
import { fetchCourse, fetchChaptersForCourse } from '../service/courseAPI';
import FinalPage from '../Components/FinalPage';

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
        <FinalPage
            title={slug}
            loading={loading}
            error={error}
            Component={Component}
        />
    );
};

export default Course;
