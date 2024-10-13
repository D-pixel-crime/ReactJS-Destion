import { useState } from "react";
import Form from "./Form";
import { MainContainer } from "../containers/MainContainer";

export const Signup = () => {
  const heading = "Signup";
  const allFields = [
    {
      id: "Username",
      type: "text",
      placeholder: "Enter your username",
    },
    {
      id: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      id: "ConfirmPassword",
      type: "password",
      placeholder: "Confirm your password",
    },
  ];

  const [formDetails, setFormDetails] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  return (
    <MainContainer>
      <article className="flex-center w-full h-screen">
        <Form
          heading={heading}
          setFormDetails={setFormDetails}
          formDetails={formDetails}
          allFields={allFields}
          alternateButton="Login"
          alternateLink="/login"
        />
      </article>
    </MainContainer>
  );
};
