
import React, { useEffect, useState } from 'react';
import './register.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Studentlogin = () => {
  const [formData, setFormData] = useState({
    Email: '',
    password: ''
  });
  const navigate = useNavigate();


  const[errormsg,setErrormsg]=useState()
  const[success,setSuccess]=useState()
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  console.log(formData);

  const formsubmit = async (e) => {
   e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/get_login/',{
       Email: formData.Email,
       password:formData.password
    });
        
    
    setSuccess(response.data.message);
    if(response.data.res=true){
      localStorage.setItem('StudentId',true)
      navigate('/studentdashboard');
    }

    } catch (error) {
      setErrormsg(error.response.data.message)
    }
    
    
  };
  
  
 useEffect(()=>{
    
 

 },[errormsg][success]
 
 )
  
 
  return (
    <>
    <h1>Login Student</h1>

    <form onSubmit={formsubmit} noValidate>
  

        <hr />   
  <label id="icon" htmlFor="name"><i className="icon-envelope "></i></label>
  <input type="text" name="Email" onChange={handleFieldChange} value={formData.Email} id="" placeholder="Student Email" required/>

 

  <label id="icon" htmlFor="name"><i className="icon-key "></i></label>
  <input type="password" value={formData.password} name="password" onChange={handleFieldChange}  id="" placeholder="Student Password" required/>

  

<br/>

{success && <div className='error-message'>{success}</div>}

{errormsg && <div className='error-message'>{errormsg}</div>}
<br/>
<hr/>
<br/>

<br/>

<p>By clicking Register, you agree on our <a href="#">terms and condition</a>.</p>
        <br/>

        <a onClick={formsubmit}  value="Register" className="button" >Login</a>
        <Link to='/'><a   value="Register" className="button" >Register</a></Link> 

      </form>
      
      </>

  );
};

export default Studentlogin;
