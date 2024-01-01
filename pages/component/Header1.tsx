import Image from "next/image";
import React from "react";
import Block from "./Block";
import demo from "../../public/demo.svg";
import Link from "next/link";
const TitleAndPara = [
  {
    title: "Become a member",
    para: "Additional 10% off on stays",
    img: demo,
  },
  {
    title: "Oyo for Business",
    para: "Trusted By 5000 Corporate's",
  },
  {
    title: "List Your Property",
    para: "Start earning in 30 mins",
  },
  {
    title: "0124-6201611",
    para: "Call us to Book now",
  },
];
const Header1 = () => {
  return (
    <div className="flex justify-between border-b-2 border-gray-300 items-center h-20 px-10 ">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={200}
        height={200}
        className="w-28 h-28"
      />
      <div className=" border-r-2 border-gray-300 h-full flex">
        {TitleAndPara.map((item) => (
          <Block key={item.title} title={item.title} para={item.para} />
        ))}
        <div className="flex items-center px-3">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className="w-10 h-10 rounded-full mr-5"
          />
          <Link href={"/login"}>
            <h3 className="font-bold">Login / Signup</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header1;
