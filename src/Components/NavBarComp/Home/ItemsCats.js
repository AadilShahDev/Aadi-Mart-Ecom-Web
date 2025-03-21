import "./itemCats.css";
import ItemsProvider from "./itemsProvider.js";
import { useState } from "react";

function ItemCats() {
  let [category, setCategory] = useState("");

  return (
    <div className="btns&imgs">
      <div className="btns">
        <div className="leftBtns">
          <button onClick={() => setCategory("FURNITURE")}>FURNITURE</button>
          <button onClick={() => setCategory("TECH")}>TECH</button>
          <button onClick={() => setCategory("FLOWERS")}>FLOWERS</button>
        </div>
        <div className="rightBtns">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>

      <div className="imgs">
        <ItemsProvider category={category} />
      </div>
    </div>
  );
}

export default ItemCats;
