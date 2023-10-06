import React, { useState, useEffect, useRef } from 'react'
import Title from '../Title'
import Button from '../Button'
import FormGroup from '../FormGroup'

export default function LoginForm({handleCancel, loggedIn, showRegister}) {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const changeEmail= (e) => {
    setEmail(e.target.value)
}

const changePassword= (e) => {
    setPassword(e.target.value)
}

const handleSubmit = (e) => {
  e.preventDefault();  
  // const event = {
  //   email: email,
  //   password: password,
  //   id: Math.floor(Math.random() * 1000),
  //   }
    validateLoginForm();
    
} 

// function resetForm() {
//   setEmail("");
//   setPassword("");
// }

function validateLoginForm(){
  email ==="" &&  window.alert("Please enter your email!");
  password==="" || password.length <= 4
  ? window.alert("Please enter your password!")
  : loggedIn(); 
}
 

// const changeInputs = (e) => {
//   emailRef.current.focus() && setEmail(e.target.value);
//   passwordRef.current.focus() && setPassword(e.target.value);
// };

// references
 let emailRef = useRef();
 let passwordRef = useRef()

//  effects
useEffect(() => {
  emailRef.current.focus();
}, []);

  return (
    <div className='form fadeIn text-center' style={{maxWidth: 500}} >
      <Title text='Login' classes="text-center mb-4"/>
      <h4 className="subtitle">Enter your credentials</h4>

      <form onSubmit={handleSubmit}>
        

        <FormGroup 
        label={"Email"}
         type={"Email"} 
         placeholder={'Enter your email'}
        value={email}
        onChange={changeEmail}
        reference={emailRef}
        />
        <FormGroup 
        label={"Password"} 
        type={"Password"} 
        placeholder={'Enter your password'} 
        value={password}
        onChange={changePassword}
        reference={passwordRef}
        />
        
        
        <div className="d-flex space-between">
            <Button classes={"btn-primary"} type={"submit"} text={"Login"} onClick={() => window.alert("form submission")} /> 
            <Button
      className={"btn-cloe"}
      text={"x"}
      style={{ position: "absolute", top: 70, right: 30 }}
      onClick={handleCancel}
      />
            <Button  type={"button"} text={"Register"}
            onClick={showRegister}
            /> 

        </div>
      </form>
        
    </div>
  )
}
 