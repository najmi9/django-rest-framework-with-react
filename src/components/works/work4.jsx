import React from 'react';
import Media from '../course/media';

const Work4 = () => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <Media media="imgs/works/api.png" alt="Vertime Website with react" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    <h4> API REST </h4>
                    This is an API REST of a e-commerce website created by symfony and the library: ApiPlatform.
                    the API has role managments and security system created by using JWT authentication bundle
                    authenticate the users.
                    <br />
                    you can try it 
                    <a href="https://shopping-najmi.herokuapp.com/api/docs">here!</a>
                    <br />
                    <a>@Symfony @ApiPlatform</a>.
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 25 May 2019</time>
                </div>
            </div>
        </div>
    );
}

export default Work4;