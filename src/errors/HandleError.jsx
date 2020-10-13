import React from 'react';

const HandleErrorCase = ({  }) => {
    return (
       <div>
             {error && (<Error />)}
             
             {!error && (<Component />) }
       </div> 
    );
};

export default HandleErrorCase;
