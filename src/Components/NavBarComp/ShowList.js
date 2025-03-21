// import { useContext } from "react";
// import { UserContext } from "../../UserContext";
// import { UContext } from "../Header";
// import "./ShowList.css";

// function ShowList() {
//   let { list, setList } = useContext(UserContext);
//   let { visible, setVisibility } = useContext(UContext);

//   let sum = list.reduce((total, item) => total + item.price, 0);

//   return (
//     <div style={{ color: "red" }} className="showList">
//       <div>
//         <ul>
//           {list.map((item) => (
//             <li key={item.id} style={{ display: "flex" }}>
//               <img src={item.img} alt="Image" />
//               <span style={{ fontSize: "15px" }} className="namePrice">
//                 {item.name} : ${item.price}{" "}
//               </span>
//               <div></div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <h3>TOTAL : ${sum}</h3>
//       <button id="Close" onClick={() => setVisibility("hidden")}>
//         Close
//       </button>
//     </div>
//   );
// }
// export default ShowList;

import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { UContext } from "../Header";
import "./ShowList.css";

function ShowList() {
  let { list, setList } = useContext(UserContext);
  let { visible, setVisibility } = useContext(UContext);

  let sum = list.reduce((total, item) => total + item.price, 0);

  return (
    <div className="showList">
      <ul>
        {list.map((item) => (
          <li key={item.id} className="showListItem">
            <img src={item.img} alt="Item" />
            <div className="itemDetails">
              <span className="itemName">{item.name}</span>
              <span className="itemPrice">${item.price}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="totalAmount">
        <h3>TOTAL: ${sum}</h3>
      </div>
      <div className="cartActions">
        <button
          id="Close"
          className="closeButton"
          onClick={() => setVisibility("hidden")}
        >
          Close
        </button>
        <button id="Checkout" className="checkoutButton">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default ShowList;
