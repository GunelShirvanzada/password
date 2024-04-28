// import { useFormik } from "formik";
import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";
// import { inputSchemas } from "./schemas";

const App = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMessage: "Username must be alphanumeric",
      required: true,
      pattern: "^[a-zA-Z0-9_]{3,}$"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMessage: "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$"
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMessage: "Passwords don't match!",
      required: true,
      pattern: values.password,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {
          inputs.map((input) => {
            return <FormInput onChange={onChange} key={input.id} {...input} />
          })
        }
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
