import item1 from "../../../Assets/images/img1.jpg";
import item2 from "../../../Assets/images/img2.jpg";
import item3 from "../../../Assets/images/img3.jpg";
import item4 from "../../../Assets/images/img4.jpg";
import "./lastItems.css";

function lastItems() {
  return (
    <div className="images">
      <div className="clmImg">
        <img src={item1} alt="Image" />
        <img src={item2} alt="Image" />
      </div>
      <img src={item3} alt="Image" id="img3" />
      <img src={item4} alt="Image" id="img4" />
    </div>
  );
}

export default lastItems;
