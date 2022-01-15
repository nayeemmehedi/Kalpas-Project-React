import React from 'react';

const Avator = () => {

    return (
        <div className="bg-primary shadow ms-5 mb-4" style={{height: '70px', width: '200px'}}>
        <div className="row">
            <div className="col-4 pt-2 ps-3">

            <img  src="https://cdn3.iconfinder.com/data/icons/avatars-business-human1/180/man1-512.png" alt="Avatar" class="avatar" />
            
            </div>
            <div className="col-6 pt-2">
            <h6>Hi Visitors</h6>
            <span style ={{fontSize:'11px'}}>Here's your News</span>
            
            
            
            </div>
        </div>
            
        </div>
    );
};

export default Avator;