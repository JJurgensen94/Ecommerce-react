import NavListDrawer from "./NavListDrawer";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const navLinks = [
  {
    title: "Home",
    path: "#",
    icon: <InboxIcon />,
  },
  {
    title: "Login",
    path: "#login",
    icon: <DraftsIcon />,
  },
  {
    title: "Register",
    path: "#register",
    icon: <EditNoteIcon />,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            onClick={() => setOpen(true)}
            sx={{ display: { sx: "flex", sm: "none" } }}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            HELLCAT SHOP
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                color="inherit"
                key={item.title}
                component="a"
                href={item.path}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <IconButton color="inherit">
            <Badge badgeContent={3} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { sx: "flex", sm: "none" } }}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
}
