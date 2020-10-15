import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import Error500 from '../errors/error500';
import Loader from './Loader';



const FinalPage = ({title, loading, error, Component }) => {

    const [err, setErr] = useState(false);
    console.log(loading)
    useEffect(()=>{
      if (error.request) {
        toast.error('Network Error : ' + error.message);
        setErr(true);
      }else if (error.status === 500) {
        setErr(true);
        toast.error("Ooops! We are sorry, It's our bad!, an unexpected error happened !");
      }else if (error.status === 401) {
        toast.error("Unthorized Request" + error.message);
        Redirect('/login');
      }else if (error.status === 403) {
        toast.error('Forbidden !' + error.message);
        Redirect('/login');
      }if (error.status === 400) {
           toast.error('Bad Request : ' + error.message)
           console.log(error.response);
      } else if (error.status === 404) {
        toast.error('Sorry ! requested resource Not Found ): 404');
      }
    	
    }, [error])

    return (
    	<>
         <div className="main-page mt-5">
           <Helmet>
               <title>najmi-imad.com| {title} </title>
            </Helmet>

           {!err && !loading && ( <Component />)}

         </div> 

         <div className="main-loader">
           {!err && loading &&  (<Loader />)}
         </div>

         <div className="main-error">

           {err && (<Error500 />)}

         </div>
     </>
    );
};

export default FinalPage;
