import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useLocation, useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/category" },
  { name: "Single News", path: "/single-news" },
  { name: "Dropdown", path: "/dropdown" },
  { name: "Contact", path: "/contact" },
];

export const AppBarComponent = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();
  const navigate = useNavigate()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white", height: "40px" }}>
      <Container
        maxWidth="xl"
        sx={{ padding: "0 !important", margin: "0 !important" }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: "100%",
            minHeight: "40px !important",
            alignItems: "inherit",
            px: {
              xs:2.5,
              sm: 2.5, 
              lg: 5, 
              md: 5, 
            }
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              height: "40px",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p className="mr-2 flex items-center cursor-pointer" onClick={()=> 
              navigate("/")
            }>
              <span className="text-red-500 text-2xl">News</span>
              <span className="text-slate-900 text-2xl">Room</span>
            </p>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "red", height: "40px" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.path}
                    variant="body1"
                    color="inherit"
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "stretch",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                disableRipple
                disableElevation
                sx={{
                  borderRadius: 0,
                  color: location.pathname === page.path ? "white" : "grey",
                  backgroundColor:
                    location.pathname === page.path ? "#f44336" : "transparent",
                  "&:hover": {
                    backgroundColor:
                      location.pathname === page.path
                        ? "#f44336"
                        : "transparent",
                  },
                  "&:active": {
                    backgroundColor:
                      location.pathname === page.path
                        ? "#f44336"
                        : "transparent",
                  },
                  height: "40px",
                }}
              >
                {page.name}
                {page.name === "Dropdown" && <ArrowDropDownIcon />}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
