import React, { useEffect, useState } from "react";
import banner1 from "../../../Assets/images/banner1.jpg";
import banner2 from "../../../Assets/images/banner2.jpg";
import banner3 from "../../../Assets/images/banner3.jpg";
import Items from "./items";
import ItemCats from "./ItemsCats.js";
import LastItems from "./lastItems.js";
function Home() {
  let banners = [banner1, banner2, banner3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img
        src={banners[currentIndex]}
        style={{ width: "100vw", marginTop: "10px" }}
      />
      <Items />
      <ItemCats />
      <LastItems />
    </div>
  );
}

export default Home;
