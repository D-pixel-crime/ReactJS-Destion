import { useState } from "react";
import Form from "./Form";
import { MainContainer } from "../containers/MainContainer";

export const Login = () => {
  const heading = "Login";
  const allFields = [
    {
      id: "Username",
      type: "text",
      placeholder: "Enter your username",
    },
    {
      id: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const [formDetails, setFormDetails] = useState({
    Username: "",
    Password: "",
  });

  return (
    <MainContainer>
      <article className="flex-center w-full h-screen">
        <Form
          heading={heading}
          setFormDetails={setFormDetails}
          formDetails={formDetails}
          allFields={allFields}
          alternateButton="Signup"
          alternateLink="/signup"
        />
      </article>
    </MainContainer>
  );
};
