import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
export const HeaderTitle = ({ text, hasIcon = false}) => {
  return (
    <div className="flex p-3 bg-white items-center">
      <span className="md:text-xl text-base text-slate-700 font-bold flex-1">
        {text}
      </span>
      {hasIcon ? (
        <div className="flex items-center gap-x-2">
          <span className="border rounded-sm">
            <KeyboardArrowLeftIcon />
          </span>
          <span className="border rounded-sm">
            <KeyboardArrowRightIcon />
          </span>
        </div>
      ) : (
        <span className="text-zinc-500">View All</span>
      )}
    </div>
  );
};
