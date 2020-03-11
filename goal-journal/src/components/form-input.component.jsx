import React from "react";

const FormInput = ({ handleChange }) => (
  <div className='form-input'>
    <input onChange={handleChange} />
  </div>
);

export default FormInput;
