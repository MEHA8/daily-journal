import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";

function App() {
  const user = localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={user ? <Navigate to="/index" /> : <Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/index" element={<Main />} />
    </Routes>
  );
}

export default App;
