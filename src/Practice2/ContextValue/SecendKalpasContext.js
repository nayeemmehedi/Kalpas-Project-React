import React,{createContext,useState} from 'react';

export const kalpasContext = createContext()

const SecendKalpasContext = ({children}) => {
       
     const [toggleValue, settoggleValue] = useState(true)



    return (
        <kalpasContext.Provider value ={[toggleValue, settoggleValue]}>
            {children}
        </kalpasContext.Provider>
    );
};

export default SecendKalpasContext;