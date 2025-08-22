import React from "react";
import User from "./User";

const Users = (props) => {
  if (props.users.length === 0) {
    return (
      <div className="user">
        <h3>No users found.</h3>
      </div>
    );
  }

  return (
    <div>
      {props.users.map((user) => (
        <User onDelete={props.onDelete} onEdit={props.onEdit} key={user.id} user={user} />
      ))}
    </div>
  );
};

export default Users;
