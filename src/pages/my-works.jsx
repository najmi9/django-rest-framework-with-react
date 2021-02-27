import React from 'react';
import { Helmet } from 'react-helmet';
import ReactShop from '../components/works/react-shop';
import Calculators from '../components/works/calculators';
import VertimeWebsite from '../components/works/vertime-website';
import Api from '../components/works/api';
import Gvet from '../components/works/gvet';
import ShopSymfony from '../components/works/shop-symfony';
import Chat from '../components/works/chat';
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
                    <div className="row">
                    <div className="work  col-lg-6">
                        <ReactShop />
                    </div>
                     <div className="work  col-lg-6">
                        <ShopSymfony />
                    </div>
                    <div className="work  col-lg-6">
                        <Calculators />
                    </div>
                    <div className="work  col-lg-6">
                        <Gvet />
                    </div>
                    <div className="work col-lg-6">
                        <Api />
                    </div>
                    <div className="work  col-lg-6">
                        <VertimeWebsite />
                    </div>
                    <div className="work  col-lg-6">
                        <Chat />
                    </div>
                    </div>
            </div>
        </section>
    );
}

export default Works;