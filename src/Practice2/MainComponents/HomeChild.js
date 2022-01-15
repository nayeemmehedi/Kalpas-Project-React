import React,{useContext} from 'react';

import {kalpasContext} from "../ContextValue/SecendKalpasContext"
import HomeChildSquare from "./ChildSquare/HomeChildSquare"
import Childthird from "./ChildSquare/Childthird"


const HomeChild = ({remove,value}) => {


const [toggleValue, settoggleValue] = useContext(kalpasContext)

    return (


        <div>
        
       
         {
         
        toggleValue ? 
           
         <Childthird value={value} remove = {remove} />

          :  
          
          <HomeChildSquare value={value} remove = {remove}/>
           
         }



            </div>
    );
};

export default HomeChild;