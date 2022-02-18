import React, { useContext, useState } from "react";
import AlertContext from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => {
          alert.show("Note has been successfully created", "success");
        })
        .catch(() => {
          alert.show("Something wrong", "danger");
        });
      setValue("");
    } else {
      alert.show("Enter title of note", "warning");
    }
    window.location.reload()
  };

  return (
    <form onSubmit={submitHandler} className="form-group">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Enter tiket name"
      />
    </form>
  );
};

export default Form;
