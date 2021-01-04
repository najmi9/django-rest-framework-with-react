import React from 'react';
import Work from './work';

const Calculators = () => {
    const images = [
        {
            original: "imgs/works/calculators/4.png",
            originalAlt: "Acceleration",
        },
        {
            original: "imgs/works/calculators/5.png"
        },
        {
            original: "imgs/works/calculators/2.png"
        },
        {
            original: "imgs/works/calculators/space.png"
        },
        {
            original: "imgs/works/calculators/3.png"
        },
        {
            original: "imgs/works/calculators/1.png"
        },
        {
            original: "imgs/works/calculators/accelerator.png"
        }
    ]
    return (
        <Work 
            images={images}
            title="Physics accelerators with javascript"
            link='https://nineplanets.org/tools/acceleration-calculator/'
            tags={['HTML', 'Javascript', 'Bulma', 'CSS5', 'ES6']}
            date="11:25 20/04/2019"
            text="Acceleration calculator creatde by javascript (ES6) and Bulma css framework, allows you to
                calculate the acceleration, velocity and distance of an object in different ways,
                with unit conversion of mass, velocity and distance."
        /> 
    );
}

export default Calculators;