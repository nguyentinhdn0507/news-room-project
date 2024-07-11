import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export const SocialMedia = () => {

    const socialMedia = [
    {
      id: 1,
      name: "Facebook",
      color: "#1877F2",
      icon: <FacebookIcon htmlColor="#1877F2"/>,
    },
    {
      id: 2,
      name: "Twitter",
      icon: <TwitterIcon htmlColor="#1DA1F2" />,
    },
    {
      id: 3,
      name: "Instagram",
      icon: <InstagramIcon  htmlColor="#E1306C"/>,
    },
    {
      id: 4,
      name: "LinkedIn",
      icon: <LinkedInIcon htmlColor="#0077B5"/>,
    },
    {
      id: 5,
      name: "YouTube",
      icon: <YouTubeIcon htmlColor="#FF0000" />,
    },
    
  ];
  return (
    <div className="flex flex-col gap-y-3">
      <p>
        <span className="text-red-500 md:text-4xl sm:text-2xl text-xl sm:font-bold">News</span>
        <span className="text-slate-900 md:text-4xl sm:text-2xl text-xl sm:font-bold ">Room</span>{" "}
      </p>
      <div className="text-wrap sm:text-2 md:text-base text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum odio
        ipsum blanditiis est rem quo voluptate, commodi possimus quidem ratione?
      </div>
      <div className="flex gap-x-2">
        {socialMedia.map((item) => (
          <span
            key={item.name}
            className="flex items-center justify-center lg:w-[30px] lg:h-[30px] border"
          >
            {item.icon}
          </span>
        ))}
      </div>
    </div>
  );
};
