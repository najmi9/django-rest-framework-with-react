import React, { useState, useEffect } from 'react';
//import { fetchPosts } from '../service/blogAPI';
import PostItem from '../Components/post_item';
import { Helmet } from 'react-helmet';

import AsideBar from '../Components/AsideBar';

const Blog = ({history}) =>{
	//const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(()=>{
  setLoading(true)
        //fetchPosts().then(r=>{
        	//setPosts(r);
        //	setLoading(true)
       /// }).catch(e=>{
        //  setLoading(false)
        //})
	}, []);

	return(
        <div>
         <Helmet>
               <title>najmi-imad.com| My Blog</title>
            </Helmet>
         
          { !loading && (<section>
             <spinning-dots style={{"width":200+"px", "strokeWidth":20+"px", "color": "#535FF6"}} dots="8">
                </spinning-dots>
             </section>) 
          }
        
        
    
          { loading && (<section>
              { [].map(post=>(<PostItem post={post} />)) }
              <AsideBar />
            </section>) 
          }
        <div className="text-center"> 
         <button className="btn btn-outline-primary"
         onClick={ history.goBack}
         >
          {'<--Back'}
          </button>

           <button className="btn btn-outline-primary"
         onClick={history.goForward}
         >
          {'Forward-->'}
          </button>
        </div>
        </div>
	);
}
export default Blog;