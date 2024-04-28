import { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { errorMessage, label, ...input } = props;
  const [focus, setFocus] = useState(false)

  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...input} focus={focus.toString()} onFocus={() => input.name === 'confirmPassword' && setFocus(true)} onBlur={() => setFocus(true)} />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
