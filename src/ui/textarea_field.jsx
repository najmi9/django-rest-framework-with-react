import React from 'react';
import className from '../utils/classNames';

const TextAreaField = ({help, name, children, error, onChange, required, minLength, value}) => {
    if (error) {
        help = error
    }

    return(
        <div className={className("form-group", error && 'has-error')}>
            
            <label className="control-label" htmlFor={name}>{children}</label>

            <textarea 
                name={name} 
                id={name} 
                className="form-control" 
                onChange={onChange} 
                required={required}
                minLength={minLength}
                rows="2"
                value={value}
            />

            {help && <div className="help-block"> {help} </div>}
        </div>
    );
};

export default TextAreaField;