

import React, { useEffect, useState } from 'react';
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Studenttemp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    radio: 'student',
    Name: '',
    Email: '',
    password: '',
    Gender: 'Male',
    Teacher_id: '',
    mobile: '',
  });
  
  const[status_code,setStatus_code]=useState(null)
  const [filderror,setFielderror]=useState({})
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    }
    );
    console.log(formData)

  };
  const formsubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/student/', formData);
      console.log(response);
      setStatus_code(response.status);
      console.log(response.error);
  
      if (response.status === 201) {
        // Successful submission, navigate to the success page
        navigate('/login');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setFielderror(error.response.data);
        console.log(filderror);
      } else {
        console.error(error);
      }
    }
  };
  
useEffect(()=>{
console.log(formData.Gender);
},[formData.Gender][filderror]);
 
  
 
  return (
    
    <form onSubmit={formsubmit} noValidate>
{status_code && <div class="alert alert-success" role="alert">
  <strong>Well done </strong>Data is Created.
</div>}

        <hr />
 

  <label id="icon" htmlFor="name"><i className="icon-user "></i></label>
  <input type="text" name="Name"           className={filderror.Name ? 'input-error' : ''}
 id="" onChange={handleFieldChange} value={formData.Name} placeholder="Student Name" required/>

  {filderror.Name && (
            <div className="error-message">    {filderror.Name}</div>
        )}  
        
  <label id="icon" htmlFor="name"><i className="icon-envelope "></i></label>
  <input type="text" name="Email" className={filderror.Email ? 'input-error' : ''} onChange={handleFieldChange} value={formData.Email} id="" placeholder="Student Email" required/>


  {filderror.Email && (
            <div className="error-message">    {filderror.Email}</div>
        )} 

  <label id="icon" htmlFor="name"><i className="icon-key "></i></label>
  <input type="password" className={filderror.password ? 'input-error' : ''} name="password" onChange={handleFieldChange} value={formData.password} id="" placeholder="Student Password" required/>
  {filderror.password && (
            <div className="error-message">    {filderror.password}</div>
        )} 

<br/>
        <div className="gender">
        <input type="radio" checked={formData.Gender === 'Male'}
onChange={handleFieldChange} value="Male" id="male" name="Gender" />

    <label for="male" class="radio" chec>Male</label>
    
    <input type="radio" checked={formData.Gender === 'Female'}
 onChange={handleFieldChange} value="Female" id="female" name="Gender" />
    <label for="female" class="radio">Female</label>
   </div> 
   

       
        <Link to='/login'><a   value="Register" className="button" >Login</a>
</Link>
        <a onClick={formsubmit}  value="Register" className="button" >Register</a>
      </form>

  );
};

export default Studenttemp;
