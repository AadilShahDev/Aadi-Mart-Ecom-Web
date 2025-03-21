import item3 from "../../../Assets/images/3.jpg";
import item2 from "../../../Assets/images/2.jpg";
import item1 from "../../../Assets/images/1.jpg";
import "./items.css";

function Items() {
  return (
    <div className="itemsDiv">
      <img src={item3} alt="Item" className="items" />
      <img src={item2} alt="Item" className="items" />
      <img src={item1} alt="Item" className="items" />
    </div>
  );
}

export default Items;
