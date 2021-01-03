import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Work2 from '../components/works/work2';
import Work1 from '../components/works/work1';
import Work3 from '../components/works/work3';
import Work4 from '../components/works/work4';
import Work5 from '../components/works/work5';

const Works = () => {

    return (
        <main>
            <Helmet>
                <title>najmi-imad| Works</title>
            </Helmet>
            <div className="container">
                <h1 className="title has-text-light"> List of my works :</h1>
                <div className="columns">
                    <div className="column is-4">
                        <Work2 />
                    </div>
                    <div className="column is-4">
                        <Work1 />
                    </div>
                    <div className="column is-4">
                        <Work3 />
                    </div>
                </div>
                <div className="columns mt-5">
                    <div className="column is-4">
                        <Work4 />
                    </div>
                    <div className="column is-4">
                        <Work5 />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Works;