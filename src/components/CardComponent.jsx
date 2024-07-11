import React from "react";
import ConvertTime from "../utils/convertTime";
import { getRandomNumber } from "../utils/randomIdImage";

const CardComponent = ({ data, isHorizontal = false }) => {
  return (
    <article
      className={`${isHorizontal ? "flex-row h-[100px]" : "card flex-col"} flex m-0`}
    >
      {data && data.urlToImage && (
        <div className={isHorizontal ? "w-[100px]" : "h-[300px] w-full"}>
          <img src={`${data.urlToImage}y`} alt={data.title} className={`${isHorizontal ? "h-full" : "flex-1"} w-full h-full object-cover`} />
        </div>
      )}
      <div className="card_content bg-white p-3 flex flex-col flex-1">
        <div>
          {data && data.source && (
            <a href={data.url} className="text-red-500 font-bold text-sm ">
              {data.source}
            </a>
          )}
          {data && data.publishedAt && (
            <span className="md:text-sm text-sm"> / {ConvertTime(data.publishedAt)}</span>
          )}
        </div>
        {data && data.title && (
          <p className="md:text-sm text-sm font-bold text-slate-700 text-wrap overflow-hidden whitespace-nowrap text-ellipsis">{data.title}</p>
        )}
        {!isHorizontal && data && data.description && (
          <p className="flex-1 md:text-sm text-xs">{data.description}</p>
        )}
      </div>
    </article>
  );
};

export default CardComponent;
