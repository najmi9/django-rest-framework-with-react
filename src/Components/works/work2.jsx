import React from 'react';
import Media from '../course/media';

const Work2 = () => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <Media media="imgs/works/app.png" alt="Ecommerce Website with react" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    Responsive e-commerce website shows products to clients,
                    a user can  register and after verifying his email, he can authenticate to
                    like, comment or buy a product,
                    and see his cart that contains old and new chosen products, and he can
                    pay with PayPal. <br /> 
                    <a href="https://shopping-najmi.herokuapp.com/">
                        The website here
                    </a>
                    <br />
                    <a>@Symfony @Api-Platform @React @Axios @Bootstrap</a>.
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2019</time>
                </div>
            </div>
        </div>
    );
}

export default Work2;