import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Form() {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [errors, setErrors] = useState({});
    const navigate=useNavigate()
    
  
    const usernameRegex =/^[a-zA-Z0-9]{3,13}$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const ageRegex = /^[0-9]{1,3}$/;

    
  const validate = () => {
    let newErrors = {};
   let isValid=true;
  
    if (!userName || !usernameRegex.test(userName)) {
      newErrors.userName = "UserName must be 3-13 characters and contain only letters and numbers";
      isValid=false
    }
  
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Email must be a valid Gmail address (e.g. example@gmail.com)";
      isValid=false
    }
  
    if (!password || !passwordRegex.test(password)) {
      newErrors.password = "Password must be 6-16 characters and include letters, numbers";
      isValid=false
    }
  
    if (!age || !ageRegex.test(age)) {
      newErrors.age = "Age must be a number between 1 and 999";
      isValid=false
    }
  
    setErrors(newErrors);
    return isValid
    
  };

  return (
    <div className="main-container">
      <h4>FORM</h4>
      <div className="container">
        <input
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <span className="error">{errors.userName}</span>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="error">{errors.email}</span>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="error">{errors.password}</span>
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <span className="error">{errors.age}</span>
        <div  className="button">
          <button 
        //   onClick={()=>navigate("user")}
          >Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Form