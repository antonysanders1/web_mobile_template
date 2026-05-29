import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

const principles = [
  {
    title: "Move fast with fewer rewrites",
    copy: "Shared navigation, theming, and route scaffolding give each new project a cleaner day-one experience.",
  },
  {
    title: "Design for phones first",
    copy: "Spacing, safe-area handling, and content stacking are tuned for handheld devices before scaling up.",
  },
  {
    title: "Keep integration doors open",
    copy: "Existing state and Firebase patterns remain compatible so downstream teams can adopt this refresh without losing their usual hooks.",
  },
];

const AboutScreen = () => {
  return (
    <Box className="page-shell">
      <Container maxWidth="lg" className="page-shell__container">
        <Box className="page-section page-banner">
          <Typography className="section-kicker">About the template</Typography>
          <Typography variant="h1" sx={{ maxWidth: "11ch", mb: 2 }}>
            A softer SaaS-style shell that still stays practical to customize.
          </Typography>
          <Typography className="section-copy" sx={{ maxWidth: "42rem" }}>
            The refreshed template leans into a cleaner landing-page rhythm, gentler
            color contrast, and a structure that feels closer to a finished product
            without boxing your team into a heavy brand system.
          </Typography>
        </Box>

        <Grid container spacing={2.5} className="page-section">
          {principles.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <Box className="feature-card">
                <Typography variant="h5" sx={{ mb: 1.25 }}>
                  {item.title}
                </Typography>
                <Typography color="text.secondary">{item.copy}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box className="page-section">
          <Box className="spotlight-panel">
            <Stack spacing={2}>
              <Typography className="section-kicker">Recommended next edits</Typography>
              <Typography variant="h3">
                Replace the placeholders with your product story, social proof, and onboarding path.
              </Typography>
              <Typography color="text.secondary">
                The content blocks are intentionally generic, but the structure is ready
                for screenshots, testimonials, pricing, app feature walkthroughs, or
                embedded product demos.
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutScreen;
