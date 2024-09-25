import React from "react";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";

export default function ForgetPassword() {
  return (
    <div>
      <h2>Forget password</h2>
      <div className="space-y-5">
        <Input
          label="Email"
          type="text"
          className=""
          onBlur={(e) => console.log(e.target.value)}
        />
        <Button onClick={() => alert("Send otp to your email")}>Send</Button>
      </div>
    </div>
  );
}
