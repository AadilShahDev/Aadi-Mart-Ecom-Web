import cart from "../../../Assets/images/cart4.png";

import "./Item.css";
import { useContext } from "react";
import { UserContext } from "../../../UserContext";
import { createContext, useState } from "react";
import carty from "../../../Assets/images/carty.png";

export let PContext = createContext(null);

function Item(props) {
  let { counter, setCounter, list, setList } = useContext(UserContext);
  let [itemX, setItemX] = useState(props.item);

  return (
    <PContext.Provider value={{ itemX }}>
      <div className="itemsT">
        <img src={props.item.img} alt="Image" />
        <div className="text">
          <p>Rating : {props.item.rating} </p>
          <p>{props.item.name}</p>
          <p>
            <b>${props.item.price}</b>
          </p>
          <div className="carts">
            <div
              className="addToCart"
              onClick={() => {
                const uniqueItem = { ...props.item, id: Date.now() };
                setList(() => [uniqueItem, ...list]);
                setCounter(counter + 1);
              }}
            >
              <img src={cart} alt="AddToCart" />
            </div>
            <div
              className="RemoveFromCart"
              onClick={() => {
                setList((prevList) =>
                  prevList.filter((obj) => obj.name !== props.item.name)
                );
                setCounter(counter > 0 ? counter - 1 : 0);
              }}
            >
              <img src={carty} alt="RemoveFromCart" />
            </div>
          </div>
        </div>
      </div>
    </PContext.Provider>
  );
}

export default Item;
