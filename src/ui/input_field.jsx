import React from 'react';
import className from '../utils/classNames';

const InputField =({help, name, value, children, error, onChange, required, minLength}) => {
    if (error) {
        help = error
    }

    return(
        <div className={className("form-group my-2", error && 'has-error')}>
            
            <label className="control-label" htmlFor={name}>{children}</label>

            <input 
                name={name} 
                id={name} 
                className="form-control" 
                onChange={onChange} 
                required={required}
                minLength={minLength}
                value={value}
            />

            {help && <div className="help-block"> {help} </div>}
        </div>
    );
};

export default InputField;