import React from "react";

import { SocialMedia } from "./SocialMedia";
import { Categories } from "./Categories";
import { TagsComponent } from "./TagsComponent";
import { QuickLink } from "./QuickLink";
export const FooterComponent = () => {
  return (
    <div className="px-10 sm:flex sm:flex-row sm:gap-4 flex flex-col gap-5">
      <div className='flex-1'>
        <SocialMedia />
      </div>
      <div className='flex-1'>
        <Categories />
      </div>
      <div className='flex-1'>
        <TagsComponent />
      </div>
      <div className='flex-1'>
        <QuickLink />
      </div>
    </div>
  );
};
