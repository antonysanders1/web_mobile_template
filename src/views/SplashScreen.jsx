import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <Box className="splash-screen">
      <motion.div
        className="splash-screen__panel"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.55 }}
      >
        <div className="splash-screen__mark">WM</div>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Web Mobile Template
        </Typography>
        <Typography color="text.secondary" sx={{ maxWidth: "28ch", mx: "auto" }}>
          Responsive foundations, polished defaults, and room to make the product your own.
        </Typography>
      </motion.div>
    </Box>
  );
};

export default SplashScreen;
