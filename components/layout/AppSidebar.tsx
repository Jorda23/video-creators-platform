"use client";

import {
  Box,
  Typography,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  { label: "My Videos", icon: <VideoLibraryIcon />, href: "/videos" },
  { label: "Analytics", icon: <AnalyticsIcon />, href: "/analytics" },
  { label: "Followers", icon: <PeopleIcon />, href: "/followers" },
  { label: "Settings", icon: <SettingsIcon />, href: "/settings" },
];

export function AppSidebar() {
  return (
    <Box
      sx={{
        width: 240,
        borderRight: "1px solid #eee",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box px={3} py={2}>
        <Typography fontSize={18} fontWeight={700} color="#ff6b6b">
          EduStream
        </Typography>
      </Box>

      <List>
        {menuItems.map((item) => (
          <ListItemButton key={item.label}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
