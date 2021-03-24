import React from 'react'
import validate from '../ValidateInfo';

const ProfilePage = () => {
    const { handleChange, values, handleSubmit, errors } = validate;

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Create your profile here.
                 </h1>
                 <div className="form-input">
                     <lable htmlfor="profile" className="form-lable">
                         Full name
                     </lable>
                     <input 
                         id='profile'
                        type='text' 
                         name='fullName'
                         className='form-input'
                         placeholder=''
                         value={values.fullName}
                         onChange={handleChange}
                         />
                         {errors.fullName && <p>{errors.fullName}</p>}
                 </div>
                 <div className='form-input'>
                     <lable htmlfor='Email' className='form-lable'>
                         Email
                     </lable>
                     <input 
                        id='email'
                        type='email' 
                         name='email'
                         className='form-input'
                         placeholder=''
                         value={values.email}
                         onChange={handleChange}
                         />
                         {errors.email && <p>{errors.email}</p>}
                 </div>
                 <div className='form-input'>
                     <lable htmlfor='userName' className='form-lable'>
                         User Name
                     </lable>
                     <input 
                        id='userName'
                        type='userName' 
                         name='userName'
                         className='form-input'
                         placeholder=''
                         value={values.userName}
                         onChange={handleChange}
                         />
                 </div>
                 <div className='form-input'>
                     <lable htmlfor='bio' className='form-lable'>
                         Tell Us About Yourself
                     </lable>
                     <input 
                        id='bio'
                        type='bio' 
                         name='bio'
                         className='form-input2'
                         placeholder=''
                         value={values.bio}
                         onChange={handleChange}
                         />
                         {errors.bio && <p>{errors.bio}</p>}
                 </div>
                 <button className='form-input-btn' type='submit'>
                    Submit Profile
                 </button>
                 <span className='form-input-login'>
                      <a href="#"></a>
                 </span>
            </form>
        </div>
    );
};

<<<<<<< HEAD
export default ProfilePage
=======
export default ProfilePage
>>>>>>> ce847ac9eeb11155e157de1a508cde93d637e639
