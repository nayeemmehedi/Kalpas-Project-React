import React,{useContext,useState} from 'react';
import {contextMain} from "../ContextValue/FirstContext"
import HomeChild from "./HomeChild"
import PaginationMain from "./Pagination/PaginationMain"

const Home = () => {

    //pagination work start 

     const [page, setpage] = useContext(contextMain)
    const [currentPage,setCurrentPage] = useState(1)
    const [postperPage,setpostperPage] = useState(5)


    const indexlastPage = currentPage * postperPage
    const indexfirstPage = indexlastPage - postperPage
    const currentposts = page.slice(indexfirstPage, indexlastPage)


    const paginat =(p)=>{
    setCurrentPage(p)
}



    //pagination work finish 



    //  const [value ,setValue] = useContext(contextMain)


    const remove = (id) => {
       

        const removeOne = page.filter(v=> v.id !== id)
        setpage(removeOne)


    }












  

    return (
        <div style={{height:"100%"}}>
        
        <HomeChild  remove={remove} value={currentposts} />
        <PaginationMain postperPage ={postperPage} totalPages ={page.length} paginat={paginat}></PaginationMain>
          
            
        </div>
    );
};

export default Home;