import React, { useContext, useEffect } from "react";
import Form from "../Components/Form";
import Loader from "../Components/Loader";
import Notes from "../Components/Notes";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const Home = () => {
  const { loading, notes, fetchNotes } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} />}
    </>
  );
};

export default Home;
