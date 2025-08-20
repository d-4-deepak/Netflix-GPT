export const checkValidData = (email, password,name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(password);
  let isNameValid = true; 
  if(name){
     isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)
     if(!isNameValid){
      return "Name must be 2 characters long and contain only letters and spaces.";
    }
  
  }    
 
   

  if (!isEmailValid) {
    return "Email Id is not valid";
  }

  if (!isPasswordValid) {
    return "Password must contain at least one uppercase, lowercase, number, and special character";
  }
  
  if(!isNameValid){
    return "Name is not valid";
  }

  return null;
};
