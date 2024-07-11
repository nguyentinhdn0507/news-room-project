import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export const QuickLink = () => {
  const links = [
    {
      id: 1,
      name: "About",
    },

    {
      id: 2,
      name: "Advertise",
    },

    {
      id: 3,
      name: "Privacy Policy",
    },
    {
      id: 4,
      name: "Terms of Conditions",
    },
    {
      id: 5,
      name: "Contact Us",
    },
  ];
  return (
    <div className="flex flex-col gap-y-3">
      <p className="md:text-xl text-base font-bold text-slate-600 ">Quick Links</p>
      <div className="flex flex-col gap-y-2">
        {links.map((link) => {
          return (
            <div className="flex gap-x-1 items-center" key={link.id}>
              <span>
                <ChevronRightIcon fontSize="small" />
              </span>{" "}
              <span key={link.id} className="text-slate-600 md:text-sm text-xs">
                {link.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
