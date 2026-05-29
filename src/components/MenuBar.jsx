import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MdClose, MdMenu } from "react-icons/md";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function MenuBar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen((currentState) => !currentState);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const navButtonStyles = (to) => ({
    color: location.pathname === to ? "primary.main" : "text.primary",
    fontWeight: location.pathname === to ? 800 : 700,
    px: 1.15,
    minWidth: "auto",
  });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        className="site-header"
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters className="site-header__toolbar">
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <RouterLink to="/" aria-label="Web Mobile Template" className="brand-lockup">
                <span className="brand-mark">WM</span>
                <span className="brand-copy">
                  <strong>Web Mobile Template</strong>
                  <span>Mobile-first starter system</span>
                </span>
              </RouterLink>
            </Box>

            <Stack
              direction="row"
              spacing={0.35}
              alignItems="center"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  sx={navButtonStyles(item.to)}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                component={RouterLink}
                to="/login"
                color="inherit"
                sx={{ px: 1.2, minWidth: "auto", fontWeight: 700 }}
              >
                Log in
              </Button>
              <Button
                component={RouterLink}
                to="/register"
                variant="contained"
                color="primary"
                sx={{ px: 2 }}
              >
                Sign up
              </Button>
            </Stack>

            <IconButton
              aria-label="Open navigation"
              onClick={toggleMobileMenu}
              color="primary"
              sx={{ display: { xs: "inline-flex", md: "none" } }}
            >
              <MdMenu />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeMobileMenu}
        PaperProps={{
          sx: {
            width: "min(88vw, 22rem)",
            p: 2,
            backgroundColor: "rgba(255, 250, 243, 0.96)",
            backdropFilter: "blur(18px)",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography variant="h6">Navigate</Typography>
          <IconButton aria-label="Close navigation" onClick={closeMobileMenu}>
            <MdClose />
          </IconButton>
        </Stack>

        <Divider sx={{ mb: 1.5 }} />

        <List>
          {navItems.map((item) => (
            <ListItem key={item.to} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                component={RouterLink}
                to={item.to}
                onClick={closeMobileMenu}
                sx={{
                  borderRadius: 3,
                  color: location.pathname === item.to ? "primary.main" : "text.primary",
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: location.pathname === item.to ? 800 : 700,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Stack spacing={1.25} sx={{ mt: "auto", pt: 2 }}>
          <Button
            component={RouterLink}
            to="/login"
            variant="text"
            onClick={closeMobileMenu}
          >
            Log in
          </Button>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            color="primary"
            onClick={closeMobileMenu}
          >
            Sign up
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}

export default MenuBar;
