import React from "react";
import { GiCrossedSwords } from "react-icons/gi";

const Childthird = ({ value, remove }) => {
  return (
    <div className="row">
      {value.map((v) => (
        <div
          className="col-3 m-3 bg-primary rounded "
          style={{ height: "300px", position: "relative" }}
        >
          <div className="text-end">
            <GiCrossedSwords
              onClick={() => remove(v.id)}
              className="text-secendary "
            />
          </div>

          <div style={{position: "absolute"}}>
            <h1>{v.id}</h1>
            <h6>{v.title}</h6>
            <small>{v.body}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Childthird;
