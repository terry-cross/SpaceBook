export default function validateInfo(values){
  let errors ={}
  
  if(!values.fullName){
    errors.fullName = "FullName required"
  }
   
  if(!values.email) {
    errors.email = "Email required"
  } else if(!/^[A-Z0-9._%+-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid"
  }

  if(values.bio) {
    errors.bio = "Short Bio Required"
  } else if (values.bio.length < 250) {
    errors.bio = "Bio can be no more than 250 characters"
  }

  return errors;
}
