import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Button } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ConvertTime from "../utils/convertTime";
import { getRandomNumber } from "../utils/randomIdImage";

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

export const CarouselSmallComponent = ({ slidesToShow, height, carouselItems }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow ?? 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <Slider {...settings}>
      {carouselItems &&
        carouselItems.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '0 10px',
              boxSizing: 'border-box',
            }}
          >
            <div className="relative flex h-full  ml-[16px]" style={{ height: `${height}px` }}>
               <div className="w-[100px] h-full">
                    <img
                      src={
                        item.urlToImage
                      }
                      alt={item.source}
                      style={{
                        width: '100%', 
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
               </div>
                <div
                  style={{
                    width: '50%',
                    backgroundColor: "white",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <div className="text-slate-700 text-sm pb-2">
                    <span className="text-red-500 font-bold">{item.source}</span> /
                    <span>{ConvertTime(item.publishedAt)}</span>
                  </div>
                  <p className="font-bold text-slate-700 text-sm">{item.title}</p>
                </div>
             </div>
          </div>
        ))}
    </Slider>
  );
};
