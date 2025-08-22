import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import axios from "axios";

// Mock API URL
const API_URL = "https://reqres.in/api/users?page=2";

// Fetch initial users from the mock API
async function fetchUsers() {
  try {
    const response = await axios.get(API_URL, {
      headers: { Accept: "application/json", "x-api-key": "reqres-free-v1" },
    });
    return response.data.data.map((user) => ({
      id: user.id,
      name: user.first_name + " " + user.last_name,
      age: Math.floor(Math.random() * 50) + 20, // Random age
    }));
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
}

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const initialUsers = await fetchUsers();
      setUsers(initialUsers);
    };
    loadUsers();
  }, []);

  function addUser(user) {
    const id = users.length + 1;
    setUsers((prevUsers) => [...prevUsers, { id, ...user }]);
  }

  function deleteUser(id) {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  }

  function editUser(user) {
    setUsers((prevUsers) =>
      prevUsers.map((u) => (u.id === user.id ? { ...u, ...user } : u))
    );
  }

  return (
    <div>
      <Header title="Users list" />
      <main>
        <Users users={users} onDelete={deleteUser} onEdit={editUser} />
      </main>
      <aside>
        <AddUser onAdd={addUser} />
      </aside>
    </div>
  );
};

export default App;
