import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import {fetchPost} from '../service/blogAPI';
import Loader from '../Components/Loader'
import { Helmet } from 'react-helmet';

const PostItem = ({ match }) =>{
	const id = match.params.id;
	const [post, setPost] = useState({});
	const [loading, setLoading] = useState(false);
	useEffect(()=>{
		try {
			setPost(fetchPost(parseInt(id)));
            setLoading(true);
		} catch(e) {
			console.log(e);
		}
	}, [id]);

	return(
       <div>
        <Helmet>
               <title>najmi-imad.com| Post Details</title>
            </Helmet>
       <section>
          { !loading && <Loader /> }
        </section>
        <section>
           {loading && (
           <div>
            <h1> {post.title} </h1>
            <div> <img src={post.picture} alt={post.title} /></div>
            <div> {post.content} </div>
            <small> {post.createdAT} </small>
           </div>)}
        </section>
       </div>
	);
}

export default PostItem;