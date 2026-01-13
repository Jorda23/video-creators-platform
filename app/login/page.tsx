"use client";

import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

export default function LoginPage() {
  return (
    <Box display="flex" minHeight="100vh">
      <Box
        flex={1}
        display={{ xs: "none", md: "flex" }}
        flexDirection="column"
        justifyContent="center"
        px={8}
        color="#fff"
        sx={{
          position: "relative",
          backgroundImage: `
            linear-gradient(
              rgba(99, 102, 241, 0.75),
              rgba(124, 58, 237, 0.75)
            ),
            url("https://images.unsplash.com/photo-1522202176988-66273c2fd55f")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography variant="h3" fontWeight={700} mb={3}>
          Unlock Your Potential
          <br />
          Through Video Learning.
        </Typography>

        <Typography variant="body1" sx={{ opacity: 0.9 }} mb={6}>
          Join thousands of creators and learners in the world’s most engaging
          educational community.
        </Typography>

        <Box display="flex" gap={6}>
          <Box>
            <Typography variant="h4" fontWeight={700}>
              10k+
            </Typography>
            <Typography sx={{ opacity: 0.8 }}>Active Teachers</Typography>
          </Box>

          <Box>
            <Typography variant="h4" fontWeight={700}>
              500k+
            </Typography>
            <Typography sx={{ opacity: 0.8 }}>Enrolled Students</Typography>
          </Box>
        </Box>
      </Box>

      <Box
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={3}
      >
        <Paper
          elevation={0}
          sx={{
            width: "100%",
            maxWidth: 420,
            p: 4,
          }}
        >
          <Typography variant="h5" fontWeight={700} mb={1}>
            Create your account
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Already have an account?{" "}
            <Typography
              component="span"
              color="primary"
              fontWeight={600}
              sx={{ cursor: "pointer" }}
            >
              Sign in here
            </Typography>
          </Typography>

          <Box display="flex" flexDirection="column" gap={2}>
            <TextField label="Full Name" fullWidth />
            <TextField label="Email Address" fullWidth />
            <TextField label="Password" type="password" fullWidth />
            <TextField
              label="Profile Photo URL"
              helperText="Optional"
              fullWidth
            />

            <FormControlLabel
              control={<Checkbox />}
              label={
                <Typography variant="body2">
                  I agree to the
                  <Typography component="span" color="primary">
                    Terms of Service
                  </Typography>
                  and
                  <Typography component="span" color="primary">
                    Privacy Policy
                  </Typography>
                </Typography>
              }
            />

            <Button variant="contained" size="large">
              Create Account →
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
