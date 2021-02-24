import React, { memo } from 'react';
import DropZone from '../../ui/dropzone';
import InputField from '../../ui/input_field';

const PersonnalData = memo(({handleChange, data, image, setImage}) => {

    return(
        <div className="personnal-data mt-4">
            <p>Let's start by your personnal information, so we can contact you!! </p>
            <fieldset>

            <legend>Personnal Data</legend>
            <div className="row">
                <div className="col-6">
                    <DropZone url="http://localhost:8000/en/user/uoplad-image" setImage={setImage} image={image}/> 
                </div>
                <div className="col-6">
                <InputField name='name' value={data.name} id='name' onChange={handleChange} required='required'minLength={2}> Name : </InputField>
                <InputField name='email' value={data.email} id='email' onChange={handleChange} required='required'> Email : </InputField>
                <InputField name='skypeId' value={data.skypeId} id='skypeId' onChange={handleChange} > Skype ID : </InputField>
                </div>
            </div>
            </fieldset>
        </div>
    );
});

export default PersonnalData;