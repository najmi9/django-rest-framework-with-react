import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {
    return (
        <div className="container">
            <Link to={"/course-" + course.id}><h1> {course.title} </h1></Link>
            <div> <img src={course.image} alt={course.title} /></div>
            <div> {course.description} </div>
            <small> {course.createdAT} </small>
        </div>
    );
};

export default CourseItem;
