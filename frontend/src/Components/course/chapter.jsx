import React, { useEffect, useState } from 'react';
import { fecthChapter } from '../../service/data';
import Media from './media';
//import toast from 'react-toastify';
import FinalPage from '../FinalPage';

const Chapter = ({ id }) => {
    const [chapter, setChapter] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState({});

	useEffect(()=>{
		fecthChapter(id)
		.then(res=>{
      setChapter(res);
      setLoading(true)
    })
		.catch(err=>{
      setError(err)
      //toast.error('Ooops!, sorry unexpected error happened !');
			console.log(err);
		})
	}, [id]);

    const Component = () =>(
        <>
        
          <div className="chapter-title">
          	<h4> { chapter.title } </h4>
          	   <div>
                 <i className="fas fa-user"></i> Author : <strong className="text-italic">  Imad Najmi </strong> At : 
                  <small className="text-muted text-italic"><i className="fas fa-clock"></i> {chapter.createdAt} </small>
                  
                </div>
            </div>

             <Media 
                isVideo={chapter.is_video}
                title={chapter.title} 
                media={chapter.media} 
                width={400}
                height={300}
              />
          
          <div className="chapter-boody">
          	{chapter.body}
          </div>
      
        </>
    );

    return(<FinalPage 
          title={chapter.title}
          loading={loading}
          error={error}
          Component={Component}
      />);
};


export default Chapter;
