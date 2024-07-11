import Slider from "react-slick";
import { Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ConvertTime from "../utils/convertTime";
import { getRandomNumber } from "../utils/randomIdImage";
import "../styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  return (
    <Button
      color="inherit"
      variant="contained"
      onClick={props.onClick}
      sx={{
        position: "absolute",
        right: 25,
        top: "50%",
        zIndex: 2,
        minWidth: 30,
        width: 30,
        height: 34,
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        border: "1px solid #fff",
        borderRadius: "0px",
        ":hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <ChevronRightIcon />
    </Button>
  );
};

const PrevArrow = (props) => {
  return (
    <Button
      color="inherit"
      variant="contained"
      onClick={props.onClick}
      sx={{
        position: "absolute",
        left: 25,
        top: "50%",
        zIndex: 2,
        minWidth: 30,
        width: 30,
        height: 34,
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        border: "1px solid #fff",
        borderRadius: "0px",
        ":hover": {
          backgroundColor: "transparent",
        },
      }}
    >
      <ChevronLeftIcon />
    </Button>
  );
};

export const CarouselComponent = ({
  slidesToShow,
  height,
  carouselItems,
  className,
}) => {
  const setting = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow ?? 1,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: 60,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={className}>
      <Slider {...setting}>
        {carouselItems &&
          carouselItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col relative h-[${height}px] gap-y-4 `}
            >
              <div>
                <img
                  src={
                    item.urlToImage 
                  }
                  alt={item.source}
                  className="w-full h-full object-cover"
                  style={{
                    objectFit: "cover",
                    height: height,
                  }}
                />
              </div>
              <div className="absolute bottom-4 left-8">
                <div className="text-white text-sm pb-2">
                  <span>{item.source}</span> /{" "}
                  <span>{ConvertTime(item.publishedAt)}</span>
                </div>
                <p className="font-bold text-white md:text-base text-sm">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};
