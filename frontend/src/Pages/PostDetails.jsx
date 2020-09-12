import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {fetchPost} from '../service/blogAPI';
import Loader from '../Components/Loader'

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
	}, []);

	return(
       <div>
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