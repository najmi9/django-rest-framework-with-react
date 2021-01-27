import React from 'react';
import Work from './work';

const Gvet = () => {
    const images = [
        {
            original: "imgs/works/gvet/1.png"
        },{
            original: "imgs/works/gvet/6.png"
        },{
            original: "imgs/works/gvet/3.png"
        },{
            original: "imgs/works/gvet/4.png"
        },{
            original: "imgs/works/gvet/5.png"
        },{
            original: "imgs/works/gvet/2.png"
        }
    ];
    return (
        <Work 
            images={images}
            title="Software of veterinaries managment"
            link='https://beta.gvetsoft.com/'
            tags={['Symfony', 'Twig', 'Doctrine ORM', 'Messenger', 'Bootstrap', 'Mercure', 
            'Doctrine Second level cache', 'Redis', 'Chart js', 'Apis', 'HttpFoundation Bundle']}
            date="16:25 11/01/2020"
            text="The website is about comprehensive management Software for clinics and 
            veterinary hospitals. with a lot of functionnalties: Emailig, Pdf Generating, 
            Asynchronouns Api Calls, Doctrine Caching with Redis, Administration, Reports, Integration 
            of Google analytics, Geolocation, Mercure Protocol ..."
        />
    );
}

export default Gvet;