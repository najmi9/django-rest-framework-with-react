import React from 'react';
import Media from '../course/media';

const Work3 = () => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <Media media="imgs/works/accademy.png" alt="Vertime Website with react" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    Vertime website created by symfony, a user can register to the school to be
                    candidat and when he accepted by the admin, so he can see the courses ,
                    notes and prof announces. Each prof can add a student note, course and announce besides
                    to see his salary. The admin control all the organasation, he can add a prof remove
                    a students, add classes and see statistics.
                    <a>@Symfony @Bootstrap</a>.
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 25 May 2019</time>
                </div>
            </div>
        </div>
    );
}

export default Work3;