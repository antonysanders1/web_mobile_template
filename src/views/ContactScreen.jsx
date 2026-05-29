import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { MainContext } from "../App";

const contactOptions = [
  {
    title: "Project intake",
    copy: "Use this card for a brief, sales handoff, or stakeholder kickoff CTA.",
  },
  {
    title: "Support path",
    copy: "Swap in your team inbox, help desk, or async support workflow once the product is live.",
  },
  {
    title: "Partnerships",
    copy: "Reserve a route section for agencies, integrators, or enterprise conversations.",
  },
];

const ContactScreen = () => {
  const { showToast } = useContext(MainContext);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((currentState) => ({
      ...currentState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    showToast("Hook this contact form into your CRM, email API, or Firebase function.", "info");
  };

  return (
    <Box className="page-shell">
      <Container maxWidth="lg" className="page-shell__container">
        <Box className="page-section page-banner">
          <Typography className="section-kicker">Contact route</Typography>
          <Typography variant="h1" sx={{ maxWidth: "11ch", mb: 2 }}>
            Give prospects and users a calm, straightforward way to reach your team.
          </Typography>
          <Typography className="section-copy" sx={{ maxWidth: "41rem" }}>
            This page balances direct contact options with a starter form, which makes
            it easy to adapt for product support, demos, or inbound sales.
          </Typography>
        </Box>

        <Grid container spacing={2.5} className="contact-grid page-section">
          <Grid item xs={12} md={5}>
            <Stack spacing={2.5}>
              {contactOptions.map((option) => (
                <Box className="contact-card" key={option.title}>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {option.title}
                  </Typography>
                  <Typography color="text.secondary">{option.copy}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box className="auth-card">
              <Typography variant="h4" sx={{ mb: 1 }}>
                Send a starter inquiry
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Keep the structure, then connect it to your preferred workflow.
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <TextField
                    required
                    fullWidth
                    name="name"
                    label="Name"
                    value={formValues.name}
                    onChange={handleChange}
                  />
                  <TextField
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                  <TextField
                    required
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    minRows={5}
                    value={formValues.message}
                    onChange={handleChange}
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Submit inquiry
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactScreen;
