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
import { PaginationComponent } from "../components/Pagination";
import { HeaderTitle } from "../components/HeaderTitle";
export const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
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
    dispatch(fetchCategories({ page: currentPage, pageSize: 4 }));
  }, [dispatch, currentPage]);

  if (loading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className="flex flex-col gap-y-2">
      <BreadcrumbsComponent links={links} />
      <div className="flex flex-col">
        <div className="md:flex md:flex-row md:justify-between md:gap-x-5 flex flex-col gap-y-5">
          <div className="md:flex md:flex-col gap-4 w-full">
            <HeaderTitle text='Technology'/>
            <div className="grid lg:grid-cols-2 sm:sm:grid-cols-1 gap-4">
              {categories &&
                categories.map((category, index) => (
                  <CardComponent data={category} key={index} />
                ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex p-3 bg-white items-center">
                <HeaderTitle text="Advertisement" />
              </div>
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ">
                {categories &&
                  categories.map((category, index) => (
                    <CardComponent data={category} key={index} isHorizontal />
                  ))}
              </div>
              <div className="flex justify-center">
                <PaginationComponent
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:max-w-[400px] w-full gap-4">
            <div>
              <FollowUs />
            </div>
            <HeaderTitle
              text=" NewsLetter"
            />
            <div className="flex flex-col gap-y-4  p-3 bg-white items-center">
              <span className=" text-slate-500 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
                quasi!
              </span>
              <InputComponent
                text="Sign Up"
                placeholder="Enter your email"
                isButton
              />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex p-3 bg-white items-center">
                <span className="lg:text-2xl sm:text-xl text-slate-800 font-bold flex-1">
                  Trending
                </span>
              </div>
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
