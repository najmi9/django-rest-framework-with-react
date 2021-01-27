import React from 'react';
import ImageGallery from 'react-image-gallery';

const Work = ({images, text, title, tags=[], date, link="#"}) => {

    //images = images.map(img => ({original: `static/${img.original}`}));
    
	return(
		<div className="card">
            <div className="card-header">
                <ImageGallery items={images} showThumbnails={false} showPlayButton={false}/>
            </div>
            <div className="card-body">
                <div className="card-text">
                    <h4 className="work-title"> {title} </h4>
                    <div className="work-description">{text}</div>
                    <div className="mt-1">
                        The website link : 
                        <a className="btn btn-sm text-primary" href={link}>Here!</a>
                    </div> 
                    <div className="tags">
                        {
                            tags.map((e, i) => (<span key={i} className="tag">
                                <i className="fas fa-tags"></i>{e} 
                            </span>
                            ))
                        }
                    </div>
                    <i className="fas fa-clock"></i>
                    <time dateTime="2019-10-01">{ date }</time>
                </div>
            </div>
        </div>
	);
}

export default Work;