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
    <div class="bg-[#353535] min-h-screen">
      <Header />
      <div class="py-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="mt-12 mb-16 text-center flex flex-col md:flex-row justify-center items-center gap-4">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item ? "active" : ""}
              class={`rounded-xl px-4 py-3 font-semibold transition-all duration-300 ${
                filter === item
                  ? "bg-[#F22233] text-white shadow-lg shadow-[#F22233]/20"
                  : "bg-[#F2B90F] text-[#0D0D0D] hover:bg-[#A68626] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6 ">
          {filteredImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`${image.category} ${index + 1}`}
              class="h-64 w-70 object-cover rounded-lg shadow-md mx-auto"
              data-aos="fade-down"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
