"use client";

import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function HomeNavbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center" gap={1}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 2,
              backgroundColor: "#ff6b6b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
            }}
          >
            🎓
          </Box>
          <Typography fontWeight={700}>EduStream</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={4}>
          <Typography variant="body2">Browse Videos</Typography>
          <Typography variant="body2">Creators</Typography>
          <Typography variant="body2">Pricing</Typography>
        </Box>

        <Box display="flex" gap={2}>
          <Button sx={{ color: "black", textTransform: "none" }} component={Link} href="/login">
            Sign In
          </Button>
          <Button
            component={Link}
            href="/signup"
            variant="contained"
            sx={{
              textTransform: "none",
              borderRadius: 8,
              backgroundColor: "#ff6b6b",
              "&:hover": { backgroundColor: "#ff5252" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
