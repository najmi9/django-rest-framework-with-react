import React from 'react';
import Icon from './icon';

export default function Button ({childern, type, color, icon }) {
    return (
        <div className="form-group">
            <button type={type} className={"btn btn-" + color}> 
                <Icon icon={icon} />
                { childern } 
            </button>
        </div>
    );
}