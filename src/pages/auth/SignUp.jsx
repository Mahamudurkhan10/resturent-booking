import React from 'react'
import Input from '../../components/shared/Input'
import Button from '../../components/shared/Button'
import { Link, useNavigate } from 'react-router-dom';


export default function SignUp() {
  const navigate = useNavigate()
  const handleSignUp = () => {
    alert("Login successfully" , );
    navigate('/')
  };
  return (
    <div>
      <img src="https://i.ibb.co.com/HhLks4g/Logo-1.png" className=" mx-auto w-[300px]" alt="" />
      <h2 className="text-2xl text-center mb-3">Great to have you back !</h2>
      <form onSubmit={handleSignUp} className="space-y-5">
        <Input
          label=" Name "
          className="py-3 pl-4"
          type="text"

          onBlur={(e) => console.log(e.target.value)}
        />
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
        <Button type="submit">Create account</Button>
      </form>
      <div className="flex items-center gap-2 pt-6 justify-center">
        <h1>Already Have an Account? </h1>
        <Link to={'/auth/login'} className="text-primary font-semibold text-lg"> Login Here !! </Link>
      </div>
    </div>
  )
}
