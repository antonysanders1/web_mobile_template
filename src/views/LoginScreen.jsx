import React from "react";
import { Box, Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { MdAutoAwesome, MdBolt, MdPhoneIphone } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";

const highlights = [
  {
    title: "Clean auth entry point",
    copy: "Dedicated login and registration routes help your landing funnel convert cleanly.",
    icon: <MdBolt size={20} />,
  },
  {
    title: "Built for mobile context",
    copy: "The card layout avoids nested viewport traps and stays comfortable on smaller screens.",
    icon: <MdPhoneIphone size={20} />,
  },
  {
    title: "Easy to customize",
    copy: "Swap the panels, copy, and auth wiring without replacing the shell.",
    icon: <MdAutoAwesome size={20} />,
  },
];

const AuthScreen = ({ isLogin }) => {
  const navigate = useNavigate();
  const activeTab = isLogin ? 0 : 1;

  const handleTabChange = (_, newValue) => {
    navigate(newValue === 0 ? "/login" : "/register");
  };

  return (
    <Box className="page-shell">
      <Container maxWidth="lg" className="page-shell__container auth-shell">
        <Grid container spacing={2.5} className="auth-grid">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              style={{ height: "100%" }}
            >
              <Box className="auth-panel">
                <Typography className="section-kicker">Auth template</Typography>
                <Typography variant="h2" sx={{ mb: 1.5 }}>
                  Keep sign-in aligned with the rest of the landing experience.
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 3 }}>
                  Keep the route structure, then connect forms to Firebase, a custom API,
                  or a hosted auth platform when the project is ready.
                </Typography>

                <Stack spacing={1.5}>
                  {highlights.map((item) => (
                    <Box
                      key={item.title}
                      sx={{
                        display: "flex",
                        gap: 1.25,
                        alignItems: "flex-start",
                        p: 1.3,
                        borderRadius: 3,
                        backgroundColor: "rgba(63, 109, 246, 0.06)",
                      }}
                    >
                      <Box sx={{ color: "primary.main", mt: 0.25 }}>{item.icon}</Box>
                      <Box>
                        <Typography fontWeight={800} sx={{ mb: 0.3 }}>
                          {item.title}
                        </Typography>
                        <Typography color="text.secondary">{item.copy}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.06 }}
              style={{ height: "100%" }}
            >
              <Box className="auth-card">
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  sx={{ mb: 3 }}
                  variant="fullWidth"
                >
                  <Tab label="Login" />
                  <Tab label="Sign Up" />
                </Tabs>
                {isLogin ? <Login /> : <SignUp />}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AuthScreen;
