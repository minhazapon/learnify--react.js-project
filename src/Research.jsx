import { useEffect } from "react";
import { useState } from "react";
import REDetails from "./REDetails";


const Research = () => {

     
     const [re, setRe] = useState([])



     useEffect( () =>{

        fetch('re.json')
        .then(res => res.json())
        .then(data => setRe(data))
 


     }  , [] )





    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 flex justify-center">


            <div className=" grid  md:grid-cols-3 gap-5">



                 
               {
                 
                 re.map( re => <REDetails re={re} ></REDetails> )


               }




                
            </div>
            
        </div>
    );
};

export default Research;