import {BiBarChart } from "react-icons/bi";
import { FaCalendarAlt } from "react-icons/fa";

import React from 'react';

const KalpasChild = ({state,toggle}) => {
    return (
        <div>

         <div className=" ms-5 rounded shadow bg-primary" style ={{height:"100px" , width:"200px"}}> 
         <h6 className="text-center pt-2">View Toggle</h6>

         <div className="row">
           <div className="col-5">
           <div onClick={()=>toggle()} className=" ms-3 rounded " style ={{height:"50px" , width:"80px"}}>
           {
             state  ? <div className="bg-success text-center pt-2 rounded shadow"  style ={{height:"50px" , width:"75px"}}>
             <FaCalendarAlt size="24"/> </div>

             : 
             
             <div className="bg-danger text-center pt-2"  style ={{height:"50px" , width:"75px"}}>
             <FaCalendarAlt size="24" className="text-info"/>
             </div>
             

             
            }
             
            
             

           </div>
          


           </div>



           <div className="col-5">
            <div onClick={()=>toggle()} className=" me-3  rounded " style ={{height:"50px" , width:"80px"}}>
            {
             !state ? <div className="bg-success text-center pt-2 rounded shadow"  style ={{height:"50px" , width:"75px"}}>
             <BiBarChart size="24"/> </div>

             : 
             
             <div className="bg-danger text-center pt-2"  style ={{height:"50px" , width:"75px"}}>
             <BiBarChart size="24" className="text-info"/>
             </div>
             
             
             
             
           }


           </div>
           
           
           
           
           
           </div>
         </div>
         
         </div>
      
      
      
      </div>
      
    );
};

export default KalpasChild;