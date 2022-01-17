import React from "react";

const FormJsx = ({
  formerror,
  isSubmit,
  handleSubmit,
  handleChange,
  Options,
  PhoneNumber,
}) => {
  return (
    <div className="nayeem">
      <h4 className="text-center">Thank you so much for taking the time !</h4>{" "}
      <hr />
      <div className="text-center">

         {/* eslint-disable-next-line eqeqeq */}
        {Object.keys(formerror) == 0 && isSubmit && (
          <h3 className="text-success"> SuccessFully Done.....</h3>
        )}
      </div>
      <form action="" onSubmit={handleSubmit}>
        {/* first name */}
        <label htmlFor="firstName">First Name</label>
        <input
          placeholder="First Name"
          type="text"
          name="firstName"
          onChange={handleChange}
        />
        <small className="text-secendary">
          {" "}
          {formerror?.firstName} 
        </small>
        {/* last name */}
        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" onBlur={handleChange} />
        <small className="text-secendary">
          {" "}
          {formerror?.lastName} 
        </small>
        {/* Address */}
        <label htmlFor="address">Address</label>
       
        <textarea
          id="reviewad"
          name="address"
          rows="2"
          cols="40"
          onBlur={handleChange}
        />{" "}
        <small className="text-secendary">
          {" "}
         
          {formerror?.address} <br />
        </small>
        
        {/* Country */}
        {/* boom */}
        <label for="country">Country</label>
       
        <select
          id="country"
          name="country"
          class="form-control"
          onBlur={handleChange}
        >
          <Options />
        </select>
        <small className="text-secendary">
          {" "}
          {formerror?.country}
        </small>
        {/* boom */}
        {/* email id  */}
        <label htmlFor="Email">Email</label>
        <input type="text" name="email" onBlur={handleChange} />
        <small className="text-secendary">
          {" "}
          {formerror?.email} 
        </small>
        {/* phone number */}
        <label htmlFor="PhoneNumber">Phone Number</label>
        {/* country codes (ISO 3166) and Dial codes. */}
        <div className="row">
          <div className="col-3">
            <select
              onBlur={handleChange}
              name="countryCode"
              id=""
              className="phonecheck"
            >
              <PhoneNumber></PhoneNumber>
            </select>

            <small className="text-secendary">
              {" "}
              {formerror?.countryCode} <br />
            </small>
          </div>
          <div className="col-8">
            <input type="number" name="phone" onBlur={handleChange} />

            <small className="text-secendary">
              {" "}
              {formerror?.phone} <br />
            </small>
          </div>
        </div>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormJsx;
