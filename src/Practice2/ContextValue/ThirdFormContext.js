import React,{createContext,useState} from 'react';

export const FormContext = createContext()


const ThirdFormContext = ({children}) => {

    const [formValue3 ,setFormValue3] =useState(true)

    return( 

     <FormContext.Provider value={[formValue3 ,setFormValue3]}>
    
          {children}

            
        </FormContext.Provider>
    );
};

export default ThirdFormContext;