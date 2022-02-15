import React from "react";

const Notes = ({ notes }) => {
  return (
    <ul className="list-group">
      {notes.map((note) => {
        return (
          <li className="list-group-item note" key={note.id}>
            {note.title}
            <div>
              <small className="text-muted">{new Date().toLocaleDateString()}</small>
              <button
                type="button"
                class="btn-close"
                aria-label="Close"
              ></button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Notes;
