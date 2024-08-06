import { useEffect } from "react";
import { useState } from "react";
import LiDEtails from "./LiDEtails";


const Library = () => {

    const [li, setli] = useState([])

    useEffect( () =>{

      fetch('li.json')
      .then( res => res.json())
      .then( data => setli(data))



    } , [] )


    return (
        <div className=" mt-10 mb-10 ml-5 mr-5 flex justify-center ">

            <div className=" grid  md:grid-cols-3 gap-5 ">





               {

                 li.map( li => <LiDEtails li={li} ></LiDEtails> )

               }






            </div>
            
        </div>
    );
};

export default Library;