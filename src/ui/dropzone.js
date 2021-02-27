import React, { useRef } from 'react';
import '../styles/dropzone.css';

export default function DropZone({image , url, setImage}) {
    const ref = useRef(null);

    const handleChange = (e) => {
        readURL(e.currentTarget);
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                ref.current.src = e.target.result;
                const s = new FormData();
                s.append('file', e.target.result);
                setImage(e.target.result)
                try {
                    fetch(url,{
                        method: 'POST',
                        body: s
                    });    
                } catch (error) {
                    
                }             
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    return (
        <div>
            <div className="image-wrapper">
                <img src={image} alt="Image" className="picture-src" ref={ref} />
                <input className="dropzone-image" type="file" name="image" id="user-image" onChange={handleChange}/>
            </div>
        </div>
    );
}