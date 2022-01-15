import validator from "validator";
 
 
 export const validate = (value) => {


    const phoneNo =(value.countryCode +"") + (value.phone + "")  ;
    

    const firstNameRegx = /^[a-z ,.'-]+$/i;

    const testFname = firstNameRegx.test(value.firstName);
    const testLname = firstNameRegx.test(value.lastName);

    function checkEmail(str) {
      return str && validator.isEmail(str);
    }

    function checkNumber(str) {
      return str && validator.isMobilePhone(str);
    }

    
    const error = {};

    if (!value.firstName) {
      error.firstName = "First name not given..";
    } else if (!testFname) {
      error.firstName = "Your name bad format";
    }


    if (!value.country) {
      error.country = "Country name not given..";
    }

    if (!testLname) {
      error.lastName = "Your name bad format";
    } else if (!value.lastName) {
      error.lastName = "Last name not given..";
    }

    if (!value.email) {
      error.email = "Gmail not given..";
    } else if (!checkEmail(value.email)) {
      error.email = "Gmail Bad Format..";
    }

    if (!value.address) {
      error.address = "Address not given..";
    }
     if (!value.countryCode) {
      error.countryCode = "countryCode not given..";
    }

    if(value.countryCode && value.phone){

       if(!checkNumber(phoneNo)){
          error.phone = "Phone No Not validate";


       }


    }
     if (!value.phone) {
      error.phone = "Phone no  not given..";
    }

    return error;





  };