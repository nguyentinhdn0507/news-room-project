import React, { useEffect, useState } from "react";
import { FollowUs } from "../components/FollowUs";
import { BreadcrumbsComponent } from "../components/Breadcrumbs";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  selectCategories,
  selectLoading,
} from "../redux/slices/categoriesSlice";
import LoadingComponent from "../components/LoadingComponent";
import CardComponent from "../components/CardComponent";
import { InputComponent } from "../components/InputComponent";
import { TagsComponent } from "../components/TagsComponent";
import { SingleNewComponent } from "../components/SingleNewComponent";
import { InputLabel } from "@mui/material";
import { CommentComponent } from "../components/CommentComponent";
import { ButtonComponent } from "../components/ButtonComponent";
import { HeaderTitle } from "../components/HeaderTitle";
export const SingleNews = () => {
  const location = useLocation();
  const generateBreadcrumbs = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    const links = [{ label: "Home", href: "/" }];
    pathnames.forEach((value, index) => {
      const href = `/${pathnames.slice(0, index + 1).join("/")}`;
      links.push({
        label: value.charAt(0).toUpperCase() + value.slice(1),
        href,
      });
    });
    return links;
  };
  const links = generateBreadcrumbs();
  const dispatch = useDispatch();

  const categories = useSelector(selectCategories);

  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchCategories({ page: 1, pageSize: 3 }));
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2">
      <BreadcrumbsComponent links={links} />
      <div className="flex flex-col">
        <div className="md:flex md:flex-row md:justify-between md:gap-x-5 flex flex-col gap-y-5">
          <div className="md:flex md:flex-col md:gap-x-5 gap-y-4 flex flex-col w-full">
            <HeaderTitle text="Technology" />
            <div className="flex flex-col gap-4 bg-white pb-4">
              {categories &&
                categories.map((category, index) =>
                  index === 0 ? (
                    <CardComponent data={category} key={index} />
                  ) : (
                    <SingleNewComponent
                      key={index}
                      data={category}
                      index={index}
                    />
                  )
                )}
            </div>
            <div className="bg-white p-3">
              <CommentComponent />
            </div>
            <div className="flex  flex-col gap-4 p-3 bg-white">
              <h3 className="md:text-xl text-base text-slate-700 flex-1 font-bold ">
                Leave a comment
              </h3>
              <div className="flex flex-col gap-y-3">
                <InputLabel size="normal" required>
                  Name
                </InputLabel>
                <InputComponent placeholder="Full Name" />
              </div>
              <div className="flex flex-col  gap-y-3">
                <InputLabel size="normal" required>
                  Email
                </InputLabel>
                <InputComponent placeholder="Email" />
              </div>
              <div className="flex flex-col  gap-y-3">
                <InputLabel size="normal" required>
                  Website
                </InputLabel>
                <InputComponent placeholder="Website" />
              </div>
              <div className="flex flex-col  gap-y-3">
                <InputLabel size="normal" required>
                  Massage
                </InputLabel>
                <InputComponent multiline placeholder="Massage" rows={4} />
              </div>
              <div>
                <ButtonComponent text="Leave a comment" color="error" />
              </div>
            </div>
          </div>

          {/* Left side */}
          <div className="flex flex-col lg:max-w-[400px] w-full gap-4">
            <div>
              <FollowUs />
            </div>
            <HeaderTitle text="Newsletter" />
            <div className="flex flex-col gap-y-4  p-3 bg-white items-center">
              <span className=" text-slate-500 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
                quasi!
              </span>
              <InputComponent
                text="Sign Up"
                isButton
                placeholder="Enter Email"
              />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col gap-4">
              <HeaderTitle text="Trending" />
              <div className="flex flex-col gap-4">
                {categories &&
                  categories.map((category, index) => (
                    <CardComponent data={category} key={index} isHorizontal />
                  ))}
              </div>
            </div>
            <div>
              <TagsComponent tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
