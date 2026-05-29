import React, { useContext, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { MainContext } from "../App";

const SignUp = () => {
  const { showToast } = useContext(MainContext);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
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
    showToast("Template account creation is ready for your backend or Firebase flow.", "success");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h4" sx={{ mb: 0.75 }}>
            Create your workspace
          </Typography>
          <Typography color="text.secondary">
            Start with sensible fields, then wire up custom validation and onboarding.
          </Typography>
        </Box>

        <TextField
          required
          fullWidth
          name="name"
          label="Full name"
          value={formValues.name}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          name="email"
          label="Work email"
          value={formValues.email}
          onChange={handleChange}
        />
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Create account
        </Button>
      </Stack>
    </Box>
  );
};

export default SignUp;
