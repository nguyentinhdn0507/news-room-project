import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export const HeaderComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="max-h-[40px] h-full bg-slate-100 sm:flex sm:justify-between sm:items-center hidden px-10 ">
        <div className="flex gap-x-2 items-center h-full ">
          <h3 className="bg-red-500 text-white h-[40px] px-2 py-1 sm:text-sm flex flex-col justify-center ">Trending</h3>
          <div className="flex items-center gap-x-2">
            <span className="border rounded-sm">
              <KeyboardArrowLeftIcon />
            </span>
            <span className="border rounded-sm">
              <KeyboardArrowRightIcon />
            </span>
          </div>
          <p className="text-slate-700 sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            tenetur!
          </p>
        </div>
        <div>{new Date().toLocaleDateString()}</div>
      </div>
      <div className="px-10 lg:block bg-zinc-200 py-3 md:blok hidden">
        <p>
          <span className="text-red-500 text-3xl font-bold">News</span>
          <span className="text-slate-900 text-3xl font-bold">Room</span>{" "}
        </p>
      </div>
    </div>
  );
};
