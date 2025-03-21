// import logo from "../Assets/images/logo1.jpg";
// import call from "../Assets/images/call.png";
// import cart from "../Assets/images/cart.png";
// import ShowList from "./NavBarComp/ShowList";
// import "./Header.css";
// import { useContext, createContext, useState } from "react";
// import { UserContext } from "../UserContext";

// export let UContext = createContext(null);

// export default function Header() {
//   let [visible, setVisibility] = useState("hidden");
//   const { counter } = useContext(UserContext);

//   return (
//     <UContext.Provider value={{ visible, setVisibility }}>
//       <header>
//         <div className="PreNav">
//           <div className="logo">
//           <img id="logoImg" src={logo} alt="img" />
//           <h1>AADI's MART</h1>
//           </div>
//           <div className="callUs">
//             <img id="callImg" src={call} alt="img" />
//             <div id="callDiv">
//               <h2>CALL US NOW</h2>
//               <p>Toll free : 0123-456-789</p>
//               <div className="itemsList" style={{ visibility: visible }}>
//                 <ShowList />
//               </div>
//             </div>

//             <div id="cartImg" onClick={() => setVisibility("visible")}>
//               <p id="cartItemsNumber">{counter}</p>
//               <img src={cart} alt="img" />
//             </div>
//           </div>
//         </div>
//       </header>
//     </UContext.Provider>
//   );
// }

import logo from "../Assets/images/logo1.jpg";
import call from "../Assets/images/call.png";
import cart from "../Assets/images/cart.png";
import ShowList from "./NavBarComp/ShowList";
import "./Header.css";
import { useContext, createContext, useState } from "react";
import { UserContext } from "../UserContext";

export let UContext = createContext(null);

export default function Header() {
  let [visible, setVisibility] = useState("hidden");
  const { counter } = useContext(UserContext);

  return (
    <UContext.Provider value={{ visible, setVisibility }}>
      <header>
        <div className="PreNav">
          <div className="logo">
            <img id="logoImg" src={logo} alt="img" />
            <h1>AADI's MART</h1>
          </div>
          <div className="callUs">
            <img id="callImg" src={call} alt="img" />
            <div id="callDiv">
              <h2>CALL US NOW</h2>
              <p>Toll free : 0123-456-789</p>
              <div
                className="itemsList"
                style={{
                  visibility: visible,
                  transition: "visibility 0.3s ease, opacity 0.3s ease",
                }}
              >
                <ShowList />
              </div>
            </div>

            <div
              id="cartImg"
              onClick={() =>
                setVisibility(visible === "hidden" ? "visible" : "hidden")
              }
            >
              <p id="cartItemsNumber">{counter}</p>
              <img src={cart} alt="img" />
            </div>
          </div>
        </div>
      </header>
    </UContext.Provider>
  );
}
