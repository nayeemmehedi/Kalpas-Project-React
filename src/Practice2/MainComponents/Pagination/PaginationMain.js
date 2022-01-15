import React from 'react';

const PaginationMain = ({postperPage, totalPages, paginat}) => {

    const pageNumber =[]


    for (let i = 1; i <= Math.ceil(totalPages/ postperPage); i++) {
        pageNumber.push(i)
    }



    return (
        <nav>
        <ul className="pagination">

        {

            pageNumber.map(n => 

                <li className="page-item">
                 {/* <a href="#" className="text-secendary">&laquo;</a> */}

                <a onClick={()=>paginat(n)} className="page-link text-secendary">{n} </a>

                {/* <a href="#">&raquo;</a> */}
                
                
                </li>



            )
        }
        
        </ul>

            
        </nav>
    );
};

export default PaginationMain;