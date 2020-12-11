import React, { useState } from 'react';
//import Chapter from './chapter'
import ReactDOM from 'react-dom';
import '../../Styles/course.css';
import Component from './component';
import MyLoadable from '../../utils/my-loadable';

const CourseTemplate = ({ course, chapters }) => {

    const [div, setDiv] = useState(0);

    const handleClick = (id) => {
        const container = document.querySelector('div.chapter-view');
        const mydiv = document.querySelector('div#chap' + id);
        mydiv.classList.add('currentChap');
        const mylastdiv = document.querySelector('div#chap' + div);
        if (mylastdiv) {
            mylastdiv.classList.remove('currentChap');
        }
        setDiv(id);

        const LoadableChapter = MyLoadable({
            loader: () => import('./chapter'),
        });

        ReactDOM.unmountComponentAtNode(container);
        ReactDOM.render(<LoadableChapter id={id} />, container);
    }

    return (
        <div className="course-template">

            <div className="course_head">
                <h4> {course.title} </h4>
                <div>
                    <i className="fas fa-user"></i> Author : <strong className="text-italic">  Imad Najmi </strong>
                    <small className="text-muted text-italic"><i className="fas fa-clock"></i> {course.createdAt} </small>

                </div>
            </div>
            <div className="course-body">
                <div className="chapters">
                    <div

                        className="chapter-detail"

                    >

                        <h4> <i className="fas fa-book-open"></i>
                            {" "} Chapters : </h4>
                    </div>

                    {chapters.map((chapter, index) => (
                        <div key={chapter.id}
                            onClick={() => handleClick(index + 1)}
                            className="chapter-detail"
                            id={"chap" + parseInt(index + 1)}
                        >

                            <i className="fas fa-play"></i>
                   chapter{index + 1} : <strong> {chapter.title} </strong>

                        </div>
                    ))
                    }
                </div>

                <div className="chapter-view">
                    <Component course={course} />
                </div>
            </div>
        </div>
    );
};

export default CourseTemplate;
