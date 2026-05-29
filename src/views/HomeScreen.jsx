import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { MdArrowOutward, MdDevices, MdFlashOn, MdLayers } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";

const featureCards = [
  {
    title: "Ship responsive pages faster",
    copy: "Start from an opinionated shell with safe-area spacing, flexible sections, and mobile-aware defaults already in place.",
    icon: <MdDevices size={24} />,
  },
  {
    title: "Keep design work lightweight",
    copy: "Theme tokens, translucent surfaces, and strong typography give you a polished base without committing to a full design system rewrite.",
    icon: <MdLayers size={24} />,
  },
  {
    title: "Swap in real integrations later",
    copy: "Auth, Firebase config, and shared state stay compatible so you can turn placeholders into product flows without re-scaffolding.",
    icon: <MdFlashOn size={24} />,
  },
];

const logoItems = ["Pixel", "Orbit", "Luma", "North", "Nova", "Helio"];

const HomeScreen = () => {
  return (
    <Box className="page-shell home-stage">
      <Container maxWidth="lg" className="page-shell__container">
        <Box className="page-section page-banner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Box className="showcase-board">
              <Box className="showcase-hero">
                <Grid container spacing={{ xs: 3, md: 5 }} className="hero-grid">
                  <Grid item xs={12} md={7}>
                    <Box className="hero-copy">
                      <Typography className="hero-eyebrow">
                        Free 30 days trial
                      </Typography>
                      <Typography component="h1" className="section-heading" sx={{ mt: 2 }}>
                        The cleanest way to launch your next mobile-first web project.
                      </Typography>
                      <Typography className="hero-summary" sx={{ mt: 2.4 }}>
                        Start from a modern template with a polished landing shell,
                        thoughtful auth routes, and enough structure to help your team
                        move from idea to launch page quickly.
                      </Typography>

                      <Box className="hero-actions">
                        <Button
                          component={RouterLink}
                          to="/register"
                          variant="contained"
                          color="primary"
                        >
                          Try for free
                        </Button>
                        <Button
                          component={RouterLink}
                          to="/about"
                          variant="outlined"
                          color="inherit"
                          endIcon={<MdArrowOutward />}
                        >
                          See how it works
                        </Button>
                      </Box>

                      <Box className="stat-strip">
                        <Box className="stat-strip__item">
                          <Typography variant="h4">5</Typography>
                          <Typography color="text.secondary">
                            ready-made routes for launch, trust, and auth
                          </Typography>
                        </Box>
                        <Box className="stat-strip__item">
                          <Typography variant="h4">1</Typography>
                          <Typography color="text.secondary">
                            shared design shell across marketing and sign-in flows
                          </Typography>
                        </Box>
                        <Box className="stat-strip__item">
                          <Typography variant="h4">0</Typography>
                          <Typography color="text.secondary">
                            Create React App dependencies left behind
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <Box className="showcase-visual">
                      <Box className="visual-cluster">
                        <span className="visual-phone" />
                        <span className="visual-pillar visual-pillar--gold-sm" />
                        <span className="visual-pillar visual-pillar--gold-lg" />
                        <span className="visual-pillar visual-pillar--slate" />
                        <span className="visual-pillar visual-pillar--blue-lg" />
                        <span className="visual-pillar visual-pillar--blue-md" />
                        <span className="visual-orb visual-orb--gold" />
                        <span className="visual-orb visual-orb--blue" />
                        <span className="visual-orb visual-orb--soft" />
                        <span className="visual-shadow" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box className="trust-strip">
                <Typography className="trust-strip__copy">
                  Trusted by individuals and teams at the world&apos;s best companies
                </Typography>
                <Box className="logo-row">
                  {logoItems.map((item) => (
                    <Box key={item} className="logo-pill">
                      {item}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Box>

        <Box className="page-section" sx={{ pt: 1 }}>
          <Box sx={{ maxWidth: "36rem", mb: 3.5 }}>
            <Typography className="section-kicker">Template strengths</Typography>
            <Typography variant="h2" sx={{ mb: 1.5 }}>
              Product-style polish without turning the template into overdesigned fluff.
            </Typography>
            <Typography className="section-copy">
              The base system stays practical: soft surfaces, stronger hierarchy,
              simplified call-to-actions, and reusable sections you can adapt fast.
            </Typography>
          </Box>

          <Grid container spacing={2.5} className="feature-grid">
            {featureCards.map((card, index) => (
              <Grid item xs={12} md={4} key={card.title}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  style={{ height: "100%" }}
                >
                  <Box className="feature-card">
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: 3,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(63, 109, 246, 0.1)",
                        color: "primary.main",
                        mb: 2,
                      }}
                    >
                      {card.icon}
                    </Box>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {card.title}
                    </Typography>
                    <Typography color="text.secondary">{card.copy}</Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeScreen;
