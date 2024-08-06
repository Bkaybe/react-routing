import "./App.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import NavBer from "./components/NavBer";
import UserDetails from "./components/UserDetails";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((users) => setUsers(users))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <NavBer />
      <Routes>
        <Route path="/" users={users} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route
          path="/users/add"
          element={<Form users={users} setUsers={setUsers} />}
        />
      </Routes>
    </div>
  );
}

export default App;
