import Image from "next/image";
import Link from "next/link";

const Hotel = () => {
  return (
    <div className="border-2 border-red-500 rounded-md h-96 w-full mb-5 p-5">
      <div className="flex">
        <img
          src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
          alt="hotels"
          width={200}
          height={200}
          className="w-96 h-large-box mr-3"
        />
        <div className="grid grid-rows-3">
          <img
            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
            alt="hotels"
            width={200}
            height={200}
            className="w-28"
          />
          <img
            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
            alt="hotels"
            width={200}
            height={200}
            className="w-28 "
          />
          <img
            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
            alt="hotels"
            width={200}
            height={200}
            className="w-28"
          />
          <img
            src="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww"
            alt="hotels"
            width={200}
            height={200}
            className="w-28"
          />
        </div>
        <div className="ml-6">
          <h2 className="font bold text-xl line-clamp-1">
            OYO Flagship Hotel Samruddhi Lodge
          </h2>
          <p className="text-justify my-5">India , Adilabad</p>
          <p className=" my-2">
            <span>Free wifi, Geyser, Power backup</span>
          </p>
          <div className="mt-36 flex justify-between items-center w-full ">
            <p>Price: 1000</p>
            <div className="font-bold">
              <Link
                href={"/hotels/2"}
                className="mr-5 p-2  border-2 border-black rounded-sm"
              >
                View Details
              </Link>
              <button className=" p-2 bg-green-500 rounded-sm text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
