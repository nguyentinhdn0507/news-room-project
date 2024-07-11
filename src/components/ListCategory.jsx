import React from "react";
import { HeaderTitle } from "./HeaderTitle";

export const ListCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Business",
      urlImg:
        "https://cdn.dcodegroup.com/5afe7234303d9dcode-group-data-business-informationjpg.jpg",
    },
    {
      id: 2,
      name: "Technology",
      urlImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIUXFfnfxRgkYy9ZFhsY67cmNlCSiJiApWA&s",
    },
    {
      id: 3,
      name: "Entertainment",
      urlImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfD-zmatYHmGdEdl8y7beIjk3_R2RFG9jJ-Q&s",
    },
    {
      id: 4,
      name: "Sports",
      urlImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQna3LhTU1XIm7GOWrXAAvb0j3PrUlZYa-LoQ&s",
    },
  ];
  return (
    <div className="flex flex-col gap-y-2">
      <HeaderTitle text="Categories" />
      {categories.map((category) => (
        <div key={category.id} className="flex flex-col gap-y-2">
          <div className="h-[50px]">
            <div className="relative flex items-center justify-center w-full h-full">
              <img
                className="h-full w-full object-cover opacity-70"
                src={category.urlImg}
                alt="Category"
              />
              <span className="absolute text-black font-bold">
                {category.name}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
