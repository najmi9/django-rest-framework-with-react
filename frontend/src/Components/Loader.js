import React, {useEffect} from 'react';
import SpinningDots from '@grafikart/spinning-dots-element'

const Loader = () =>{
useEffect(()=>{

customElements.define('spinning-dots', SpinningDots)


}, []);

   return(
   <spinning-dots style={{"width":200+"px", "strokeWidth":20+"px", "color": "#535FF6"}} dots="8">
   </spinning-dots>
   );
}

export default Loader;

