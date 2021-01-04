import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ReactShop from '../components/works/react-shop';
import Calculators from '../components/works/calculators';
import VertimeWebsite from '../components/works/vertime-website';
import Api from '../components/works/api';
import Gvet from '../components/works/gvet';
import ShopSymfony from '../components/works/shop-symfony';
import '../styles/works.css';

const Works = () => {

    return (
        <section>
            <Helmet>
                <title>najmi-imad| Works</title>
            </Helmet>
            <div className="container">
                <h1 className="bg-light rounded p-3 my-4 text-primary" 
                style={{ 'fontWeight': 'bolder' }}>
                    List of my works :
                </h1>
                    <div className="work">
                        <ReactShop />
                    </div>
                     <div className="work">
                        <ShopSymfony />
                    </div>
                    <div className="work">
                        <Calculators />
                    </div>
                    <div className="work">
                        <Gvet />
                    </div>
                    <div className="work">
                        <Api />
                    </div>
                    <div className="work">
                        <VertimeWebsite />
                    </div>
            </div>
        </section>
    );
}

export default Works;