import React from 'react';
import Media from '../course/media';

const Work1 = () => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <Media media="imgs/works/accelerator.png" alt="Ecommerce Website with react" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    Acceleration calculator allows you to calculate the acceleration of an object in different ways,
                    with unit conversion of mass, velocity and distance. Created with Javascript vanila and the css
                    framework Bulma.
                    <br />
                    <a>@HTML @Javascript @Bulma</a>.
                    <hr />
                    <a href="https://nineplanets.org/tools/acceleration-calculator/">
                        The website here.
                    </a>
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2019</time>
                </div>
            </div>
        </div>
    );
}

export default Work1;