"use client";

import { Box, Button, Typography, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export function AppNavbar() {
  return (
    <Box
      sx={{
        height: 64,
        px: 3,
        borderBottom: "1px solid #eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
      }}
    >
      <Typography fontSize={18} fontWeight={600}>
        Video Management
      </Typography>

      <Box display="flex" alignItems="center" gap={2}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          href="/videos/create"
          sx={{
            textTransform: "none",
            borderRadius: 2,
            backgroundColor: "#ff6b6b",
            "&:hover": { backgroundColor: "#ff5252" },
          }}
        >
          Create New Video
        </Button>

        <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
      </Box>
    </Box>
  );
}
