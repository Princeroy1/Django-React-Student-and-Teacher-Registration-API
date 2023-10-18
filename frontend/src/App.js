import React, { useEffect, useState } from 'react';
  
import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';
import Login from './components/login';
import Registration from './components/registraion';
import Logo from './components/logo';
import OnlineCoursesDashboard from './components/dashboard';
import Studentdashbord from './components/Studentdashbord';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('Teacherlogin'));
  const [isAuth, setAuth] = useState(localStorage.getItem('StudentId'));

  useEffect(() => {
    // Check for authentication data in localStorage
    const userToken = localStorage.getItem('Teacherlogin');
    const userT = localStorage.getItem('StudentId');     // You can replace 'userToken' with your key
    if (userToken) {
      setIsAuthenticated(true);
      if (userT) {
        setAuth(true);
      }
    }

    
  },[]);


  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route exact path="/dashboard" element={isAuthenticated ? (<OnlineCoursesDashboard /> ):(
        <Navigate exact to="/login" />

        )
        
} /> 
      <Route exact path="/studentdashboard" element={isAuth ? (<Studentdashbord /> ):(
        <Navigate to="/login" />

        )
        
} />   
        <Route exact path="/login" element={<Logo />} />

      </Routes>
    </Router>

  
   
  );
}

export default App;
