import "./styles.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { UserContext } from "./UserContext";
import { useState } from "react";
export default function App() {
  let [counter, setCounter] = useState(0);
  let [list, setList] = useState([]);

  return (
    <UserContext.Provider value={{ counter, setCounter, list, setList }}>
      <Header />
      <NavBar />
      <Footer />
    </UserContext.Provider>
  );
};
