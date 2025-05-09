import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import JournalForm from "./JournalForm"; // Add this

const Main = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserName(user.firstName); // Or `${user.firstName} ${user.lastName}`
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Daily Journal</h1>
        <div style={{ marginLeft: "auto", marginRight: "10px", color: "#fff" }}>
          Welcome, {userName}
        </div>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      
      {/* Add journal form below navbar */}
      <div style={{ marginTop: "20px" }}>
        <JournalForm />
      </div>
    </div>
  );
};

export default Main;
