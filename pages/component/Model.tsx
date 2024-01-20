import React from "react";
import { FaChevronRight } from "react-icons/fa6";

type ModelType = {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const famousPlacesInDelhi = [
  "India Gate",
  "Qutub Minar",
  "Red Fort (Lal Qila)",
  "Humayun's Tomb",
  "Lotus Temple",
  "Akshardham Temple",
  "Jama Masjid",
  "Raj Ghat",
  "Chandni Chowk",
  "National Zoological Park",
  "Gurudwara Bangla Sahib",
  "National Museum",
  "Lodi Gardens",
  "Connaught Place",
  "Dilli Haat",
];

const Model = ({ isOpen, onClose }: ModelType) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-10 left-5 bg-white p-4 border border-gray-300 z-10 w-48">
      <h3 className="font-bold">Popular Localities</h3>
      {famousPlacesInDelhi.map((items) => (
        <ul>
          <li key={items} className="text-pretty my-1">
            {items}
          </li>
        </ul>
      ))}
      <h3 className="my-1  text-xl text-red-500 flex items-center ">
        All of Delhi <FaChevronRight />
      </h3>
      <button
        className="mt-4 p-2 bg-gray-200 hover:bg-gray-300"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};

export default Model;
