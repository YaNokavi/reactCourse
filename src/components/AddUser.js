import { useState } from "react";

const AddUser = (props) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        value={user.name}
        onChange={(event) =>
          setUser((prev) => ({ ...prev, name: event.target.value }))
        }
      />
      <input
        type="number"
        placeholder="Age"
        value={user.age}
        onChange={(event) =>
          setUser((prev) => ({ ...prev, age: event.target.value }))
        }
      />
      <button
        type="button"
        onClick={() => {
          const userData = {
            name: user.name,
            age: Number(user.age),
          };
          if (props.user) {
            userData.id = props.user.id;
          }
          props.onAdd(userData);
          setUser({ name: "", age: "" });
        }}
      >
        Add User
      </button>
    </form>
  );
};

export default AddUser;
