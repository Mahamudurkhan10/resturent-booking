import React from "react";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    alert("Login successfully" , );
    navigate('/')
  };
  return (
    <div>
       <img src="https://i.ibb.co.com/HhLks4g/Logo-1.png" className=" mx-auto w-[300px]" alt="" />
      <h2 className="text-2xl text-center mb-3">Great to have you back !</h2>
      <form onSubmit={handleLogin} className="space-y-5">
        <Input
          label="User Name or Email"
          className="py-3 pl-4"
          type="email"
          
          onBlur={(e) => console.log(e.target.value)}
        />
        <Input
          label="Password"
          className="py-3 pl-4"
          
          type="password"
          onBlur={(e) => console.log(e.target.value)}
        />
        <Button type="submit" >Sign In</Button>
      </form>
       <div className="flex items-center gap-2 pt-6 justify-center">
         <h1>New here? </h1>
          <Link to={'/auth/sign-up'} className="text-primary font-semibold text-lg"> Create a your account !!  </Link>
       </div>
    </div>
  );
}
