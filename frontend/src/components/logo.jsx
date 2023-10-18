import React, { useEffect, useState } from 'react';
import './register.css';
import axios from 'axios';
import Studentlogin from './studentlogin';
import Login from './login';
const Logo = () => {
  const [radio, setRadio] = useState('student');


  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  useEffect(() => {
    console.log(radio);
  }, [radio]);


  return (
    <>
    <div className="testboxstudent">
        
        <div className="accounttype">
          <input
            type="radio"
            value="student"
            onChange={handleRadioChange}
            id="radioOne"
            name="account"
            defaultChecked
          />
          <label htmlFor="radioOne" className="radio">
            Student
          </label>
          <input
            type="radio"
            value="teacher"
            onChange={handleRadioChange}
            id="radioTwo"
            name="account"
          />
          <label htmlFor="radioTwo" className="radio">
            Teacher
          </label>
        </div>
        {radio === 'teacher' ? (
          <Login/>
        ):(
          <Studentlogin/>
        )}
   
     </div>
 </>
  );
};

export default Logo;
