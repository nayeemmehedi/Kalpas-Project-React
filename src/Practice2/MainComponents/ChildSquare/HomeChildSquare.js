import React from 'react';

import { GiCrossedSwords } from "react-icons/gi";


const HomeChildSquare = ({value,remove}) => {
    return (
         <div className="row">
               {

                   value.map(v=>(


                       <div className='col-12  m-3 rounded '>
                        <div className="row text " style ={{height: '100px'}}>

                      
                       
                            
                          


                            <div className="col-1 pt-4 bg-primary"><h1> <img  src="https://cdn3.iconfinder.com/data/icons/avatars-business-human1/180/man1-512.png" alt="Avatar" class="avatar" /></h1></div>


                            <div className="col-9 bg-primary pt-4"> <h6 className="textChild">{v.body}</h6>
                            <p className="textChild1">{v.title}</p>
                            
                            
                            
                            </div>
                          
                             <div className="col-2 mt-4">

                            <GiCrossedSwords onClick={()=>remove(v.id)}className="text-secendary"/>
                             
                            
                             </div>

                        </div>
           
                       </div> 


                   ))
               }
           </div>
    );
};

export default HomeChildSquare;