import React from 'react';
import { Link } from 'react-router-dom';

const PostItem = ({post}) =>{
	return(
       <div>
           <Link to={"/blog-"+post.id}><h1> {post.title} </h1></Link>
           <div> <img src={post.picture} alt={post.title} /></div>
           <small> {post.createdAT} </small>
       </div>
	);
}

export default PostItem;