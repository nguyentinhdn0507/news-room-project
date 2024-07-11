import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export const FollowUs = () => {
  const followUs = [
    {
      id: 1,
      name: "Facebook",
      color: "#1877F2",
      fans: "12,000,000 fans",
      icon: <FacebookIcon />,
    },
    {
      id: 2,
      name: "Twitter",
      color: "#1DA1F2",
      fans: "12,000,000 fans",
      icon: <TwitterIcon />,
    },
    {
      id: 3,
      name: "Instagram",
      color: "#E1306C",
      fans: "12,000,000 fans",
      icon: <InstagramIcon />,
    },
    {
      id: 4,
      name: "LinkedIn",
      color: "#0077B5",
      fans: "12,000,000 fans",
      icon: <LinkedInIcon />,
    },
    {
      id: 5,
      name: "YouTube",
      color: "#FF0000",
      fans: "12,000,000 fans",
      icon: <YouTubeIcon />,
    },
    {
      id: 6,
      name: "Vimeo",
      color: "#1AB7EA",
      fans: "12,000,000 fans",
      icon: <LiveTvIcon />,
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex p-3 bg-white items-center">
        <span className="md:text-xl text-base text-slate-700 flex-1 font-bold">Follow Us</span>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-2 gap-4">
        {followUs.map((social) => (
          <div
            key={social.id}
            className="flex items-center gap-2 p-2"
            style={{
              backgroundColor: social.color,
              color: "#fff",
              borderRadius: "2px",
            }}
          >
            <span>{social.icon}</span>
            <span>{social.fans}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
