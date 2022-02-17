import React, { useContext, useState } from "react";
import AlertContext from "../context/alert/alertContext";

const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext)

  const submitHandler = (event) => {
    event.preventDefault()

    if(value.trim()) {
      alert.show('Note has been successfully created', 'success')
      setValue('')
    }else{
      alert.show('Enter title of note', 'warning')
    }
  }

  return (
    <form onSubmit={submitHandler} className="form-group">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Enter tiket name"
      />
    </form>
  );
};

export default Form;
