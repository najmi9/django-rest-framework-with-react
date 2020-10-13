import React from 'react';

const Media = ({isVideo, media, title, width, height}) => {
    return (
         <div className="chapter-media text-center">
          	{ isVideo && (
          	 	<video controls width={width} height = {height}>
    				     <source src={media} type="video/webm" 
                    width={width} height = {height}/>
   					    <source src={media} type="video/mp4" 
                   width={width} height = {height} />
              </video>
          	 	) 
            }
          	{ !isVideo && (<img src={media} 
              alt={title} width={width}
               height = {height} />)
            }
          </div>
    );
};

export default Media;
