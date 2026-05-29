import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import { Route, Routes } from "react-router-dom";
import { themeOptions } from "./Theme";
import MenuBar from "./components/MenuBar";
import Toast from "./components/Toast";
import AboutScreen from "./views/AboutScreen";
import HomeScreen from "./views/HomeScreen";
import AuthScreen from "./views/LoginScreen";
import ContactScreen from "./views/ContactScreen";
import SplashScreen from "./views/SplashScreen";
import useAuthStore from "./state/useAuthStore";
import "./App.css";

export const MainContext = createContext({});

const theme = createTheme(themeOptions);
const SPLASH_DURATION_MS = 1350;

function App() {
  const userData = useAuthStore((state) => state.userData);
  const currentUser = useAuthStore((state) => state.currentUser);
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);
  const clearCurrentUser = useAuthStore((state) => state.clearCurrentUser);
  const setUserData = useAuthStore((state) => state.setUserData);
  const [showSplash, setShowSplash] = useState(true);
  const [toastState, setToastState] = useState({
    open: false,
    message: "",
    variant: "info",
  });

  useEffect(() => {
    const timerId = window.setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION_MS);

    return () => window.clearTimeout(timerId);
  }, []);

  const hideToast = useCallback(() => {
    setToastState((currentState) => ({ ...currentState, open: false }));
  }, []);

  const showToast = useCallback((message, variant = "info") => {
    setToastState({
      open: true,
      message,
      variant,
    });
  }, []);

  const contextValue = useMemo(
    () => ({
      authStore: {
        currentUser,
        setCurrentUser,
        clearCurrentUser,
        setUserData,
      },
      userData,
      toastState,
      showToast,
      hideToast,
    }),
    [
      clearCurrentUser,
      currentUser,
      hideToast,
      setCurrentUser,
      setUserData,
      showToast,
      toastState,
      userData,
    ]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainContext.Provider value={contextValue}>
        <Box className="app-shell">
          <Toast />
          <Box className={`splash-layer${showSplash ? " is-active" : ""}`}>
            <SplashScreen />
          </Box>

          <MenuBar />

          <Box component="main" className="app-main">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/about" element={<AboutScreen />} />
              <Route path="/contact" element={<ContactScreen />} />
              <Route path="/login" element={<AuthScreen isLogin />} />
              <Route path="/register" element={<AuthScreen isLogin={false} />} />
            </Routes>
          </Box>

          <Box component="footer" className="site-footer">
            <Container maxWidth="lg" className="site-footer__inner">
              <span>Web Mobile Template</span>
              <span>Built for quick, polished launches on every screen.</span>
            </Container>
          </Box>
        </Box>
      </MainContext.Provider>
    </ThemeProvider>
  );
}

export default App;
