import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import AsideBar from '../Components/AsideBar';

const Blog = ({history}) =>{
	//const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    }, []);

	return(
        <div>
         <Helmet>
               <title>najmi-imad.com| My Blog</title>
            </Helmet>
          
          { !loading && (
            <div style={{ "marginTop": 70 + "px" }}>
                <section className="is-flex is-justify-content-center">
                    <spinning-dots style={{"width":200+"px", "strokeWidth":20+"px", "color": "#535FF6"}} dots="8">
                    </spinning-dots>
                </section>
            </div>) 
          }
        
        
          { loading && (<section className="container mt-5">
            <div className="title has-text-white"> List of Articles: </div>
              <AsideBar />
            </section>) 
          }
        </div>
	);
}
export default Blog;