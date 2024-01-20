import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FiEdit2 } from "react-icons/fi";
import { PiDoorThin } from "react-icons/pi";
import { LuBadgePercent } from "react-icons/lu";

import { FaQuestionCircle } from "react-icons/fa";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SingleHotel = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="m-5">
      <div>
        <img
          src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
          alt="hotels"
          width={2000}
          height={2000}
          className="w-7/12 h-[400px] my-5 mx-auto"
        />
      </div>
      <div className="mx-64">
        <div className="flex justify-around   border-2 w-full">
          <div className="w-8/12">
            <div>
              <h2 className="font-bold text-3xl mb-2">
                OYO Flagship Hotel Samruddhi Lodge
              </h2>
              <h3 className="text-xs w-7/12 font-bold text-gray-400">
                1-2-21/KL7&8 KBR COMPLEX , APOLLO PHARMACY BUILDING ,SHIVAJI
                CHOWK,NIRMAL DIST, ADILABAD, Telangana, India , Adilabad
              </h3>
            </div>
            <div className="mt-5">
              <p className="font-bold text-2xl">Amenities</p>
              <ul className="mt-2">
                <li>Free Wifi</li>
                <li>AC</li>
                <li>TV</li>
                <li>Geyser</li>
                <li>Power backup</li>
              </ul>

              <p className="text-2xl font-bold py-4">About this OYO</p>
              <p className="text-gray-400 text-xs">
                Affordable hotels at prime location.
              </p>

              <p className="text-xl font-bold py-3">Choose your room</p>
              <div className="flex flex-col w-[600px] border-2 rounded-sm">
                <div>
                  <p className="bg-gray-500 font-bold text-xs px-2 py-1 rounded-sm">
                    SELECTED CATEGORY
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p>Classic</p>
                    </div>
                    <div>
                      <p>Image</p>
                    </div>
                  </div>
                </div>
                <div>2</div>
              </div>
            </div>
          </div>

          <div className="rounded-lg shadow-lg">
            <div className="flex  justify-center items-center bg-gradient-to-r from-red-600 to-red-400 rounded-t-md w-full ">
              <p className="text-xs font-bold px-5 py-3">
                LOGIN NOW TO GET UPTO 15% LOWER PRICES
              </p>
              <button className=" ml-2 px-3 py-2 bg-red-300 my-2 mx-3 rounded-md">
                Login
              </button>
            </div>
            <p className="py-1 px-3">₹774</p>
            <p className="text-xs text-gray-400 px-3">+ taxes & fees: ₹133</p>

            {/* Filters added*/}
            <div className=" flex justify-around items-center my-4 mx-3 flex-col rounded-md">
              <div className="mx-5">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateRangePicker"]}>
                    <DateRangePicker
                      localeText={{ start: "Check-in", end: "Check-out" }}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="border-2 my-2 mx-5 w-[420px]">
                <div className="hover:cursor-pointer">
                  <p
                    onClick={handleOpen}
                    className="py-4 px-8 w-full text-center"
                  >
                    1 Room , 1 Guest
                  </p>
                </div>

                {/* <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography
                      id="modal-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.
                    </Typography>
                  </Box>
                </Modal> */}
              </div>
              <div className="flex justify-between items-center border-2 w-[420px] px-2 py-2  rounded-md hover:cursor-pointer ">
                <div className="flex items-center ">
                  <PiDoorThin />
                  <p className="px-2">Classic</p>
                </div>
                <div>
                  <FiEdit2 />
                </div>
              </div>
            </div>

            {/* Apply Coupons*/}
            <div className="flex mx-7">
              <LuBadgePercent />
              <div className="flex flex-col justify-start items-center mx-3">
                <p className="text-sm text-red-400 mb-2">Apply Coupons</p>
                <p className="text-xs px-3 py-2 font-bold text-gray-400 rounded-sm bg-gradient-to-r from-green-300 to-green-500 hover:cursor-pointer">
                  MORE OFFERS
                </p>
              </div>
            </div>

            <div className="w-[420px] my-9 mx-7">
              <div className="flex justify-between items-center px-2 py-1">
                <p className="text-sm">Total price</p>
                <p className="text-sm">₹2266</p>
              </div>
              <div className="flex text-gray-400 items-center">
                <p className="text-xs text-gray-400">Including taxes & fees</p>
                <p className="px-2">
                  <FaQuestionCircle />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHotel;
