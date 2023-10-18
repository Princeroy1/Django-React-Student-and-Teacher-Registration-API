import React, { useEffect, useState } from 'react';
import './register.css';
import axios from 'axios';
import Teachertemp from './teachertemp';
import Studenttemp from './studenttemp';

const Registration = () => {
  const [radio, setRadio] = useState('student');


  const handleRadioChange = (e) => {
    setRadio(e.target.value);
  };

  useEffect(() => {
    console.log(radio);
  }, [radio]);


  return (
  <div className={radio === 'student' ? 'testboxstudent' : 'testboxteacher'}>
      <h1>Registration</h1>
        <hr />
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
          <Teachertemp/>
        ):(
          <Studenttemp/>
        )}
   
     
 </div>
  );
};

export default Registration;
