import React from 'react';
import Media from './media';

const Component = ({course}) =>{
  return(
         <div> 
            <h4> {course.title} </h4>
             <div>
                 <i className="fas fa-user"></i> Author : <strong className="text-italic">  Imad Najmi </strong> 
                  <small className="text-muted text-italic"><i className="fas fa-clock"></i> {course.createdAt} </small>
                </div>
            <Media isVideo={course.is_video}
                title={course.slug} 
                media={course.media}
                width={600}
                height={300}
            />
            <div className="card">
                <h5>What you'll learn ?</h5>
                <div className="">
                  By the end of this course you 
                  will understand the fundamentals of 
                  the Linux operating system and be able to apply
                   that knowledge in a practical and useful manner.
                   This course is an introduction to Linux operating 
                   system, il will help  beginners to understand the 
                   system and how it works, 
                   we are going to discover this system and useful
                  commands together.
                </div>
             </div>
            <div className="bg-light card"> 
            <ul>
            <h5>This course aims to :</h5>
            <li> <i className="fas fa-check"></i> Teach you the fundamentals of the Linux operating system. </li>
            <li> <i className="fas fa-check"></i> Help you to understand the linux OS an dhow it works. </li>
            <li> <i className="fas fa-check"></i>Show you how to use the basic commands with examples. </li>
            <li> <i className="fas fa-check"></i> Help you to understand the security system in Linux. </li>
            <li> <i className="fas fa-check"></i>Teach you How to use the terminal in Linux. </li>
            <li> <i className="fas fa-check"></i> Help you to set up a Ubuntu web server. </li>
            <li> <i className="fas fa-check"></i> Help you to have a hacker terminal. </li>
            </ul>
             </div>
        </div>
    )
}


export default Component;
