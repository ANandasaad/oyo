import { useState } from "react";
import Model from "./Model";

const Header2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const list = [
    { name: "Delhi" },
    { name: "Mumbai" },
    { name: "Hyderabad" },
    { name: "Chennai" },
    { name: "Bangalore" },
    { name: "Gurgaon" },
    { name: "Kolkata" },
    { name: "Noida" },
    { name: "Pune" },
    { name: "All Cities" },
  ];

  return (
    <div className="relative">
      <div className="flex justify-between bg-gray-100 px-20 py-3">
        {list.map((item) => (
          <div
            key={item.name}
            onMouseEnter={() => setHoveredState(item.name)}
            onMouseLeave={() => setHoveredState(null)}
            onClick={() => setIsModalOpen(true)} // Open modal on click
            className={`cursor-pointer ${
              hoveredState === item.name ? "bg-gray-300" : ""
            }`}
          >
            {item.name}
          </div>
        ))}
        <Model isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default Header2;
