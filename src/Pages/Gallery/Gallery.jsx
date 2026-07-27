import commercial1 from "../../assets/commercial1.jpeg";
import commercial2 from "../../assets/commercial2.jpeg";
import commercial3 from "../../assets/commercial3.jpeg";
import commercial4 from "../../assets/commercial4.jpeg";
import commercial5 from "../../assets/commercial5.jpeg";
import commercial6 from "../../assets/commercial6.jpeg";
import commercial7 from "../../assets/commercial7.jpeg";
import industrial1 from "../../assets/industrial1.jpeg";
import industrial2 from "../../assets/industrial2.jpeg";
import industrial3 from "../../assets/industrial3.jpeg";
import industrial4 from "../../assets/industrial4.jpeg";
import industrial5 from "../../assets/industrial5.jpeg";
import residential1 from "../../assets/residential1.jpeg";
import residential2 from "../../assets/residential2.jpeg";
import manufacture1 from "../../assets/manufacture1.jpeg";
import manufacture2 from "../../assets/manufacture2.jpeg";
import { useState } from "react";
import Header from "../../Components/Common Components/Header";
import Footer from "../../Components/Common Components/Footer";

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const images = [
    {
      src: residential1,
      category: "Residential",
    },
    {
      src: residential2,
      category: "Residential",
    },

    {
      src: commercial1,
      category: "Commercial",
    },
    {
      src: commercial2,
      category: "Commercial",
    },
    {
      src: commercial3,
      category: "Commercial",
    },
    {
      src: commercial4,
      category: "Commercial",
    },
    {
      src: commercial5,
      category: "Commercial",
    },
    {
      src: commercial6,
      category: "Commercial",
    },
    {
      src: commercial7,
      category: "Commercial",
    },

    {
      src: industrial1,
      category: "Industrial",
    },
    {
      src: industrial2,
      category: "Industrial",
    },
    {
      src: industrial3,
      category: "Industrial",
    },
    {
      src: industrial4,
      category: "Industrial",
    },
    {
      src: industrial5,
      category: "Industrial",
    },

    {
      src: manufacture1,
      category: "Manufacture",
    },
    {
      src: manufacture2,
      category: "Manufacture",
    },
  ];

  const filteredImages =
    filter === "All"
      ? images
      : images.filter((image) => image.category === filter);

  const filters = [
    "All",
    "Residential",
    "Commercial",
    "Industrial",
    "Manufacture",
  ];

  return (
    <>
      <Header />
      <div>
        <div>
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>

        <div>
          {filteredImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`${image.category} ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
