import React, { useContext, useEffect } from "react";
import { IconButton, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { MainContext } from "../App";

const variantDurations = {
  success: 2200,
  info: 3200,
  warning: 3500,
  error: 4200,
};

const Toast = () => {
  const { hideToast, toastState } = useContext(MainContext);

  useEffect(() => {
    if (!toastState.open) {
      return undefined;
    }

    const timerId = window.setTimeout(
      hideToast,
      variantDurations[toastState.variant] || 3000
    );

    return () => window.clearTimeout(timerId);
  }, [hideToast, toastState.open, toastState.variant]);

  return (
    <AnimatePresence>
      {toastState.open ? (
        <motion.div
          className="toast-root"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.24 }}
        >
          <div className={`toast-card toast-card--${toastState.variant}`}>
            <div style={{ flex: 1 }}>
              <Typography fontWeight={800} sx={{ mb: 0.25 }}>
                {toastState.message}
              </Typography>
            </div>
            <IconButton
              aria-label="Close notification"
              onClick={hideToast}
              size="small"
              sx={{ color: "inherit" }}
            >
              <MdOutlineClose />
            </IconButton>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Toast;
