export const themeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3f6df6",
      light: "#7394ff",
      dark: "#294dc7",
      contrastText: "#f8fbff",
    },
    secondary: {
      main: "#94a3ff",
      light: "#b8c2ff",
      dark: "#6f7de4",
      contrastText: "#1d2956",
    },
    background: {
      default: "#dbe6ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#101a3a",
      secondary: "#66708d",
    },
    success: {
      main: "#3d9b78",
    },
    info: {
      main: "#5f85ff",
    },
    warning: {
      main: "#ffcd75",
    },
    error: {
      main: "#d9656a",
    },
  },
  shape: {
    borderRadius: 22,
  },
  typography: {
    fontFamily: '"Manrope", "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Space Grotesk", "Segoe UI", sans-serif',
      fontWeight: 700,
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: "1.2rem",
          minHeight: 48,
          letterSpacing: "-0.01em",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 700,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(249, 251, 255, 0.95)",
          borderRadius: 18,
        },
      },
    },
  },
};
