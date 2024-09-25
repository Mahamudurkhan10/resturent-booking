import React from "react";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";

export default function Login() {
  const handleLogin = () => {
    alert("Login successfully");
  };
  return (
    <div>
      <h2>Login</h2>
      <div className="space-y-5">
        <Input
          label="Email"
          className="py-3"
          type="text"
          onBlur={(e) => console.log(e.target.value)}
        />
        <Input
          label="Password"
          className="py-3"
          type="password"
          onBlur={(e) => console.log(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
