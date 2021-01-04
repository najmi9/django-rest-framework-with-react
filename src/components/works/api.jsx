import React from 'react';
import Work from './work';

const Api = () => {
    const images = [
        {
            original: "imgs/works/api/api.png"
        },{
            original: "imgs/works/api/1.png"
        },{
            original: "imgs/works/api/2.png"
        },{
            original: "imgs/works/api/3.png"
        },{
            original: "imgs/works/api/4.png"
        },{
            original: "imgs/works/api/5.png"
        },
    ];
    return (
        <Work 
            images={images}
            title="API REST With Api ApiPlatform and Symfony"
            link='https://shopping-najmi.herokuapp.com/api/docs'
            tags={['Symfony', 'ApiPlatform', 'Doctrine ORM', 'Messeger',  'Mercure', 
            'Doctrine cache', 'Rest Apis', 'JWT']}
            date="16:25 11/01/2019"
            text="This is an API REST support for modern hypermedia formats (JSON-LD, HAL and Hydra) of an ecommerce website 
            created by symfony and the library: ApiPlatform.
                    the API has role managments and security system created by using JWT authentication bundle
                    authenticate the users."
        />
    );
}

export default Api;