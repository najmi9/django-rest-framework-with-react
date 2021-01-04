import React from 'react';
import Work from './work';

const VertimeWebsite = () => {
    const images = [
        {
            original: "imgs/works/accademy/0.jpg"
        },
        {
            original: "imgs/works/accademy/3.png"
        },
        {
            original: "imgs/works/accademy/2.png"
        },
        {
            original: "imgs/works/accademy/1.png"
        },
        {
            original: "imgs/works/accademy/4.png"
        }
    ];
    return (
        <Work 
            images={images}
            title="Ecommerce website with React Symfony"
            link='https://shopping-najmi.herokuapp.com/'
            tags={['Symfony', 'Twig', 'Doctrine ORM', 'Bootstrap']}
            date="06:25 30/12/2018"
            text=" Vertime website created by symfony, a user can register to the school to be
                    candidat and when he accepted by the admin, so he can see the courses ,
                    notes and teacher announces. Each teacher can add a student note, course and announce besides
                    to see his salary. The admin control all the organasation, he can add a teacher remove
                    a students, add classes and see statistics."
        />
    );
}

export default VertimeWebsite;