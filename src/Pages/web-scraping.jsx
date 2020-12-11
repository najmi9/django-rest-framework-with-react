import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const Webscraping = () => {

    useEffect(() => {
        const url = `http://shopping-najmi.herokuapp.com/api/products/`;
        axios.get(url)
            .then(res => console.log(res))
            .catch(err => {
                console.log(err.status)
                console.log(err.message)
                console.log(err.request)
                console.log(err.response)
            });
    }, []);
    return (
        <Helmet>
            <title>najmi-imad.com| Web Scraping</title>
        </Helmet>
    );
};

export default Webscraping;
