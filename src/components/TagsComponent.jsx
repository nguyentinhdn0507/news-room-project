import React from "react";

export const TagsComponent = ({ tags = false}) => {
  const categories = [
    {
      id: 1,
      name: "Politics",
    },

    {
      id: 2,
      name: "Business",
    },
    {
      id: 3,
      name: "Cooperates",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "Health",
    },
    {
      id: 6,
      name: "Education",
    },
    {
      id: 7,
      name: "Science",
    },
    {
      id: 8,
      name: "Entertainment",
    },
    {
      id: 9,
      name: "Technology",
    },
    {
      id: 10,
      name: "Foods",
    },
    {
      id: 11,
      name: "Travel",
    },
    {
      id: 12,
      name: "LifeStyle",
    },
  ];
  return (
    <div className="flex flex-col gap-y-3">
      {tags ? (
        <div className="flex p-3 bg-white items-center">
          <span className="md:text-xl  text-xl text-slate-700 font-bold flex-1">
            Tags
          </span>
        </div>
      ) : (
        <p className="md:text-xl font-bold text-base text-slate-600">Tags</p>
      )}
      <div className="flex gap-x-2 flex-wrap gap-y-2">
        {categories.map((category) => (
          <span
            className="p-2  border border-slate-300 md:text-sm text-xs"
            key={category.id}
          >
            {category.name}
          </span>
        ))}
      </div>
    </div>
  );
};
