import React from "react";
import AddUser from "./AddUser";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

const User = (props) => {
  const user = props.user;

  const [editing, setEditing] = React.useState(false);
  return (
    <div className="user">
      <IoCloseCircleSharp
        className="delete-icon"
        onClick={() => props.onDelete(user.id)}
      />
      <IoHammerSharp
        className="edit-icon"
        onClick={() => {
          setEditing((prev) => !prev);
        }}
      />
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>

      {editing && <AddUser user={user} onAdd={props.onEdit} />}
    </div>
  );
};

export default User;
