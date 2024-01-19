import React, { useEffect, useState } from 'react'

const useTypeWriter = (text, speed) => {
    const[displayText, setDisplayText] = useState('');
    useEffect(()=>{
     let i=0;
     const typingInterval = setInterval(()=>{
         if(i<text.length)
         {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
         }
         else{
            clearInterval(typingInterval);
         }
         return () => {
            clearInterval(typingInterval);
          };
     },speed);
    },[text,speed])
  return displayText;
}

export default useTypeWriter;
