import React, {useRef, useEffect, useState} from 'react'
import Title from '../Title'
import Button from '../Button'
import FormGroup from '../FormGroup';


export default function RegisterationForm({handleCancel, showLogin}) {

// references
let fullName = useRef();
useEffect(() => {
    fullName.current.focus();
}, []);
// state
const [registration, setRegistration] = useState({
    fullName:"",
    email:"",
    password:"",
    passwordConfirmation:"",
})

// handlers
const handleInputChange=(e)=>{
    setRegistration({...registration,[e.target.name]:e.target.value})
}

    function handleRegistration(e) {
        e.preventDefault();
        console.log("first");
        const events = {
            fullName: registration.fullName,
            email: registration.email,
            password: registration.password,
            passwordConfirmation: registration.passwordConfirmation,
            id: Math.floor(Math.random() * 1000),
        };
        // console.log(events)
   

    const validateRegistrationForm = (obj) => {
        console.log(obj);
        if(
            Object.values(obj).every(
                (value) => value || (typeof value === "number" & value === 0)
            )
        ) {
            resetForm();
            window.alert("Success!");
            showLogin();
        } else {
            window.alert("Complete all fields!")
        }
    };
        validateRegistrationForm(events);
    }

    function resetForm() {
        setRegistration({
            fullName:"",
            email:"",
            password:"",
            passwordConfirmation:"",
        })
    }
      
  return (
    <div className='form fadeIn' style={ {maxWidth:500, minHeight: 500} }>
      <Title text='register' classes={"text-center mb-4"}/>
      <Button
      className={"btn-cloe"}
      text={"x"}
      style={{ position: "absolute", top: 70, right: 30 }}
      onClick={handleCancel}
      />
<form onSubmit={handleRegistration}>
    <FormGroup 
    label={"Name"}
    placeholder={"Enter your name"}
    reference={fullName}
    value={registration.fullName}
    onChange={handleInputChange}
    name="fullName"/>

<FormGroup 
    label={"Email"}
    type={"email"}
    placeholder={"Enter your Email"}
    value={registration.email}
    onChange={handleInputChange}
    name="email"/>

<FormGroup 
    label={"Password"}
    type={"password"}
    placeholder={"Enter your Password"}
    value={registration.password}
    onChange={handleInputChange}
    name="password"/>

<FormGroup 
    label={"Name"}
    type={"password"}
    placeholder={"confirm your password"}
    value={registration.passwordConfirmation}
    onChange={handleInputChange}
    name="passwordConfirmation"
    />
    
<div className="d-flex space-between">
            <Button classes={"btn-primary btn-lg"}
             type={"submit"} text={"Register"} onClick={() => console.log("Regisered")} /> 
            
            <Button  type={"button"} classes={"btn-lg"} text={"Login"}
            onClick={showLogin}
            /> 

        </div>
</form>
    </div>
  )
}
