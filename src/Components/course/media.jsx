import React from 'react';

const Media = ({ isVideo, media, title, width, height,className }) => {
    if (!isVideo) {
        isVideo = false; 
    }
    return (
        <div className="chapter-media text-center">
            { isVideo && (
                <video controls width={width} height={height}>
                    <source src={media} type="video/webm"
                    width={width} height={height} />
                    <source src={media} type="video/mp4"
                    width={width} height={height} />
                </video>
            )}
            { !isVideo && (<img src={ "static/"+media}
                alt={title??'Title'} width={width??''}
                height={height??''}  className={className??''} />)
            }
        </div>
    );
};

export default Media;
