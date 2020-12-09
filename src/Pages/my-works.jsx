import React from 'react';
import { Helmet } from 'react-helmet';
import Work2 from '../Components/works/work2';

const Works = () =>{
	return(
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
                        <Work2 />
                    </div>
                    <div className="column is-4">
                        <Work2 />
                    </div>
                </div>
            </div>
		</main>
	);
}

export default Works;