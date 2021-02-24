import React from 'react';
import TextAreaField from '../../ui/textarea_field';

const ProjectDescription = ({handleChange, data}) => {
    return(
        <div className="personnal-data">
            <h1>Project Description</h1>
            <TextAreaField
             name='description' 
             id='description' 
             onChange={handleChange} 
             required='required'
             minLength={5}
             value={data.description}
            > Project Description :  </TextAreaField>
        </div>
    );
}

export default ProjectDescription;