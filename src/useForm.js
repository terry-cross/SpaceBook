import {useState, useEffect, useForm} from 'react'


const {register} = useForm ({
  //  const[values, setValues] = useState({
      fullName: '',
      email: '',
      userName: '',
      stateOrRegion: ''
   });
  const [errors, setErrors] = useState({})


  const handleChange = e => {
      const { name, values} = e.target
      setValues({
          ...values,
          [name]: values
      });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
  };

  return {handleChange, values, handleSubmit, errors };
// });

export default useForm;