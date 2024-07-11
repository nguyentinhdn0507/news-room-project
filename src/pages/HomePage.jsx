import React, { useEffect } from "react";
import { ListCategory } from "../components/ListCategory";
import { CarouselComponent } from "../components/CarouselComponent ";
import {
  fetchCategories,
  selectCategories,
  selectLoading,
} from "../redux/slices/categoriesSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../components/LoadingComponent";
import { CarouselSmallComponent } from "../components/CarouselSmall";
import { HeaderTitle } from "../components/HeaderTitle";
import CardComponent from "../components/CardComponent";
import { TagsComponent } from "../components/TagsComponent";
import { FollowUs } from "../components/FollowUs";
import { InputComponent } from "../components/InputComponent";

export const HomePage = () => {
  const categories = useSelector(selectCategories);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories({ page: 1, pageSize: 4 }));
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <LoadingComponent />
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="sm:hidden lg:block md:block hidden">
        <CarouselSmallComponent
          height={100}
          slidesToShow={3}
          carouselItems={categories}
        />
      </div>
      <div className="lg:flex sm:flex-col lg:flex-row sm:w-full gap-x-4">
        <div className="flex-none lg:w-3/4 ">
          <CarouselComponent height={288} carouselItems={categories} />
        </div>
        <div className="lg:flex-1 sm:w-full">
          <ListCategory />
        </div>
      </div>
      <div className="lg:block md:block hidden">
        <CarouselComponent
          className="slider-fourth"
          slidesToShow={4}
          height={300}
          carouselItems={categories}
        />
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-x-4 sm:grid sm:grid-cols-1">
        <div className="flex flex-col gap-y-3">
          <HeaderTitle text="Business" hasIcon={true} />
          <div className="lg:grid lg:grid-cols-2 gap-4 sm:grid sm:grid-cols-1">
            {categories &&
              categories.map((category) => (
                <CardComponent key={category.id} data={category} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <HeaderTitle text="Technology" hasIcon={true} />
          <div className="lg:grid lg:grid-cols-2 gap-4 sm:grid sm:grid-cols-1">
            {categories &&
              categories.map((category) => (
                <CardComponent key={category.id} data={category} />
              ))}
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 gap-x-4 sm:grid sm:grid-cols-1">
        <div className="flex flex-col gap-y-3">
          <HeaderTitle text="Entertainment" hasIcon={true} />
          <div className="lg:grid lg:grid-cols-2 gap-4 sm:grid sm:grid-cols-1">
            {categories &&
              categories.map((category) => (
                <CardComponent key={category.id} data={category} />
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <HeaderTitle text="Sports" hasIcon={true} />
          <div className="lg:grid lg:grid-cols-2 gap-4 sm:grid sm:grid-cols-1">
            {categories &&
              categories.map((category) => (
                <CardComponent key={category.id} data={category} />
              ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="md:flex md:flex-row md:justify-between md:gap-x-5 flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-4 w-full">
            <HeaderTitle text="Technology" />
            <div className="grid lg:grid-cols-2 sm:sm:grid-cols-1 gap-4">
              {categories &&
                categories.map((category, index) => (
                  <CardComponent data={category} key={index} />
                ))}
            </div>
            <div className="flex flex-col gap-4">
              <HeaderTitle text="Advertisement" />
              <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-4 ">
                {categories &&
                  categories.map((category, index) => (
                    <CardComponent data={category} key={index} isHorizontal />
                  ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:max-w-[400px] w-full gap-4">
            <div>
              <FollowUs />
            </div>
            <HeaderTitle text='NewsLetter'/>
            <div className="flex flex-col gap-y-4  p-3 bg-white items-center">
              <span className=" text-slate-500 ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
                quasi!
              </span>
              <InputComponent placeholder="Enter your email" text='Sign Up' isButton />
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="flex flex-col gap-4">
             
              <HeaderTitle text={"Trending"}/>
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
