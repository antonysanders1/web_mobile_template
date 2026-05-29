import React, { useContext, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { MainContext } from "../App";

const Login = () => {
  const { showToast } = useContext(MainContext);
  const [formValues, setFormValues] = useState({
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
    showToast("Connect this form to your auth provider to complete sign-in.", "info");
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h4" sx={{ mb: 0.75 }}>
            Welcome back
          </Typography>
          <Typography color="text.secondary">
            Sign in with your app's auth flow or replace this with a custom provider.
          </Typography>
        </Box>

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
          Log in
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
