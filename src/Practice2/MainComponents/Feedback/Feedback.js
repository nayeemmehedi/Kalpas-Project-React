import React,{useContext} from 'react';
import {FormContext} from "../../ContextValue/ThirdFormContext"
import {useHistory} from "react-router-dom"

const Feedback = () => {

  const history = useHistory()



  const   [formValue3 ,setFormValue3] = useContext(FormContext)

  const ChangeValue =() =>{

      setFormValue3(!formValue3) 

      history.push("/Kalpas/feedback")





  }
  const ChangeValue2 =() =>{

      setFormValue3(!formValue3)


     history.push("/Kalpas")

  }
  


    return (
        <div>

        {
            formValue3 ?  <div className=" ms-5 mt-4 rounded shadow bg-primary" style ={{height:"100px" , width:"200px"}}> 

          <h6 className="text-center pt-1">Have a Feedback ? </h6>

          <div onClick={()=>ChangeValue()}  className="bg-success ms-4 rounded shadow" style ={{height:"55px" , width:"150px"}}>
          

          {/* <Link onClick={()=>ChangeValue}   to="/Kalpas/feedback" style ={{textDecoration:"none"}}> */}
          <div >

          <p className="text-center pt-2">We are Lisiting..</p>
          
          
          </div>
          
           
          


          
          </div>


        </div> :  <div className=" ms-5 mt-4 rounded shadow bg-primary" style ={{height:"100px" , width:"200px"}}> 

          <h6 className="text-center pt-1">Have a Feedback ? </h6>

          <div onClick={()=>ChangeValue2()} className="bg-secendary ms-4 rounded shadow" style ={{height:"55px" , width:"150px"}}>
          

        

           <p className="text-center pt-2">We are Lisiting..</p>
          
         

          
          </div>


        </div>
        }
            
        </div>
    );
};

export default Feedback;