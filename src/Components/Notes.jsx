import React from "react";

const Notes = ({ notes }) => {
  console.log(notes);

  return (
    <ul className="list-group">
      {!!notes.length ? (
        <div>{notes?.map((note) => {
          return (
            <li className="list-group-item note" key={note.id}>
              {note.title}
              <div>
                <small className="text-muted">{note.date}</small>
                <button
                  type="button"
                  class="btn-close"
                  aria-label="Close"
                ></button>
              </div>
            </li>
          );
        })}</div>
      ) : (
        <h1>IDI FUKING NAHER</h1>
      )}
    </ul>
  );
};

export default Notes;
