import React from 'react';
import Work from './work';

const ReactShop = () => {
    const images = [
        {
            original: "imgs/works/shop-react/2.png"
        },
        {
            original: "imgs/works/shop-react/1.png"
        },
        {
            original: "imgs/works/shop-react/app.png"
        },
        {
            original: "imgs/works/shop-react/3.png"
        }
    ];
    return (
        <Work 
            images={images}
            title="Ecommerce website with React Symfony"
            link='https://shopping-najmi.herokuapp.com/'
            tags={['Symfony', 'React', 'Api-Platform', 'Axios', 'Bootstrap']}
            date="10:25 30/01/2019"
            text="Responsive e-commerce website of all types of products,
                    a user can register and after verifying his email, he can
                    authenticate to his account, like, comment or buy a product,
                    and see his cart that contains old and new chosen products,
                    and he can pay with PayPal. the website is very fast and has high 
                    performance by cachig the products and stock the user in the local storage."
        />
    );
}

export default ReactShop;