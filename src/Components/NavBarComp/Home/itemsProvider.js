import item1 from "../../../Assets/images/4.jpg";
import item2 from "../../../Assets/images/5.jpg";
import item4 from "../../../Assets/images/7.jpg";
import item5 from "../../../Assets/images/8.jpg";
import item7 from "../../../Assets/images/10.jpg";
import f1 from "../../../Assets/images/flowers/flower1.jpg";
import f2 from "../../../Assets/images/flowers/flower2.webp";
import f3 from "../../../Assets/images/flowers/flower3.jpeg";
import f4 from "../../../Assets/images/flowers/flower4.jpeg";
import f5 from "../../../Assets/images/flowers/flower5.jpg";
import t1 from "../../../Assets/images/Tech/laptop.webp";
import t2 from "../../../Assets/images/Tech/bluetooth.jpg";
import t3 from "../../../Assets/images/Tech/earphone.jpg";
import t4 from "../../../Assets/images/Tech/headset.jpg";
import t5 from "../../../Assets/images/Tech/mobile.jpeg";

import Item from "./Item.js";

const items = [
  { img: item1, name: "Fancy Chair", rating: "3.55", price: 145 },
  { img: item2, name: "Wooden Ancient Stand", rating: "3.20", price: 125 },
  { img: item4, name: "Table Chair", rating: "3.0", price: 105 },
  { img: item5, name: "Fancy Wooden Chair", rating: "3.4", price: 155 },
  { img: item7, name: "Fancy Cage", rating: "3.0", price: 100 },
  { img: item1, name: "Fancy Chair", rating: "3.55", price: 145 },
  { img: item2, name: "Wooden Ancient Stand", rating: "3.20", price: 125 },
];

const flowers = [
  { img: f1, name: "Flowers", rating: "4.55", price: 145 },
  { img: f2, name: "Flowers", rating: "3.20", price: 125 },
  { img: f3, name: "Flowers", rating: "5.0", price: 105 },
  { img: f4, name: "Flowers", rating: "4.4", price: 155 },
  { img: f5, name: "Flowers", rating: "3.9", price: 100 },
  { img: f1, name: "Flowers", rating: "4.55", price: 145 },
  { img: f2, name: "Flowers", rating: "3.20", price: 125 },
];
const techs = [
  { img: t1, name: "Laptop", rating: "3.55", price: 145 },
  { img: t2, name: "Bluetooth", rating: "3.20", price: 125 },
  { img: t3, name: "Earphones", rating: "3.0", price: 105 },
  { img: t4, name: "Headset", rating: "3.4", price: 155 },
  { img: t5, name: "Mobile", rating: "3.0", price: 100 },
  { img: t1, name: "Laptop", rating: "3.55", price: 145 },
  { img: t2, name: "Bluetooth", rating: "3.20", price: 125 },
];

function ItemsProvider(props) {
  let item = techs;
  switch (props.category) {
    case "FURNITURE":
      item = items;
      break;
    case "TECH":
      item = techs;
      break;
    case "FLOWERS":
      item = flowers;
      break;

    default:
      break;
  }
  return (
    <div style={{ display: "flex", overflowX: "auto" }}>
      {item.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

export default ItemsProvider;
