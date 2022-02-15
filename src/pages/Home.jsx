import React from "react";
import Form from "../Components/Form";
import Notes from "../Components/Notes";

const Home = () => {

  const notes = new Array(3).fill('').map((_, i)=> ({id: i, title: i+1}))

  return (
    <>
      <Form />
      <hr/>
      <Notes notes={notes}/>
    </>
  );
};

export default Home;
