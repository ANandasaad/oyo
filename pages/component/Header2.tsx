import { useState } from "react";

import { FaAngleUp } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
type title = {
  name: string;
  submenu?: {
    id: string;
    subTitle: string;
  }[];
};
const Header2 = () => {
  const [isModalOpen, setIsModalOpen] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  const handleMouseEnter = (name: string) => {
    setIsModalOpen(name);
  };
  const handleMouseLeave = () => {
    setIsModalOpen(null);
  };
  const list: title[] = [
    {
      name: "Gurugram",
      submenu: [
        { id: "1", subTitle: "DLF CyberHub" },
        { id: "2", subTitle: "Kingdom of Dreams" },
        { id: "3", subTitle: "Sultanpur National Park" },
        { id: "4", subTitle: "Leisure Valley Park" },
        { id: "5", subTitle: "Ambience Mall" },
      ],
    },
    {
      name: "Hyderabad",
      submenu: [
        { id: "1", subTitle: "Charminar" },
        { id: "2", subTitle: "Golconda Fort" },
        { id: "3", subTitle: "Birla Mandir" },
        { id: "4", subTitle: "Ramoji Film City" },
        { id: "5", subTitle: "Hussain Sagar Lake" },
      ],
    },
    {
      name: "Chennai",
      submenu: [
        { id: "1", subTitle: "Marina Beach" },
        { id: "2", subTitle: "Kapaleeshwarar Temple" },
        { id: "3", subTitle: "Fort St. George" },
        { id: "4", subTitle: "Guindy National Park" },
        { id: "5", subTitle: "Elliots Beach" },
      ],
    },
    {
      name: "Noida",
      submenu: [
        { id: "1", subTitle: "DLF Mall of India" },
        { id: "2", subTitle: "Worlds of Wonder" },
        { id: "3", subTitle: "Okhla Bird Sanctuary" },
        { id: "4", subTitle: "The Great India Place" },
        { id: "5", subTitle: "Botanic Garden" },
      ],
    },
    {
      name: "Delhi",
      submenu: [
        { id: "1", subTitle: "India Gate" },
        { id: "2", subTitle: "Qutub Minar" },
        { id: "3", subTitle: "Humayun's Tomb" },
        { id: "4", subTitle: "Red Fort" },
        { id: "5", subTitle: "Lotus Temple" },
      ],
    },
    {
      name: "Mumbai",
      submenu: [
        { id: "1", subTitle: "Gateway of India" },
        { id: "2", subTitle: "Marine Drive" },
        { id: "3", subTitle: "Siddhivinayak Temple" },
        { id: "4", subTitle: "Juhu Beach" },
        { id: "5", subTitle: "Elephanta Caves" },
      ],
    },
    {
      name: "Bangalore",
      submenu: [
        { id: "1", subTitle: "Lalbagh Botanical Garden" },
        { id: "2", subTitle: "Bangalore Palace" },
        { id: "3", subTitle: "Cubbon Park" },
        { id: "4", subTitle: "Vidhana Soudha" },
        { id: "5", subTitle: "ISKCON Temple" },
      ],
    },
    {
      name: "Pune",
      submenu: [
        { id: "1", subTitle: "Shaniwar Wada" },
        { id: "2", subTitle: "Aga Khan Palace" },
        { id: "3", subTitle: "Sinhagad Fort" },
        { id: "4", subTitle: "Osho Ashram" },
        { id: "5", subTitle: "Katraj Snake Park" },
      ],
    },
    {
      name: "All Cities",
    },
  ];

  return (
    <div className="relative">
      <div className="flex justify-between bg-gray-100 px-20">
        {list.map((item) => (
          <div
            key={item.name}
            onMouseEnter={() => handleMouseEnter(item.name)}
            onMouseLeave={() => handleMouseLeave()}
            className="group cursor-pointer"
          >
            <div
              className={` px-2 py-1 flex items-center ${
                isModalOpen && isModalOpen === item?.name
                  ? "group-hover:bg-gray-300"
                  : ""
              }`}
            >
              {item.name}
              <div
                className={`px-1 ${
                  isModalOpen === item.name
                    ? "rotate-180 transition transform"
                    : ""
                }`}
              >
                <FaAngleUp />
              </div>
            </div>
            {item?.submenu && isModalOpen === item.name && (
              <div className="absolute top-8  px-2 py-1 backdrop-blur-3xl bg-white/65">
                <h3 className="py-2 px-4 font-bold">Popular Localities</h3>
                {item.submenu.map((submenu) => (
                  <div className="py-1 px-4" key={submenu.id}>
                    {submenu?.subTitle}
                  </div>
                ))}
                <h3 className="text-red-400 py-1 px-4 flex items-center">
                  All of {item.name} <FaAngleRight />
                </h3>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header2;
