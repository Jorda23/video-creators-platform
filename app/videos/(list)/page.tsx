"use client";

import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Switch } from "@/components";

const stats = [
  { label: "Total Videos", value: 24 },
  { label: "Total Likes", value: "1,284" },
  { label: "Followers", value: 856 },
  { label: "Published", value: "18/24", highlight: true },
];

const videos = [
  {
    id: 1,
    title: "Intro to Advanced Calculus",
    description: "Full stack overview of differential equations...",
    published: true,
  },
  {
    id: 2,
    title: "Machine Learning Basics",
    description: "Learning about regressions and classification...",
    published: false,
  },
  {
    id: 3,
    title: "Web Dev Masterclass: Part 4",
    description: "Implementing complex UI components with React...",
    published: true,
  },
  {
    id: 4,
    title: "Digital Marketing 101",
    description: "The basics of SEO, SEM, and social media...",
    published: true,
  },
];

const glassCardStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.85)",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  boxShadow: "0 2px 6px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08)",
  border: "1px solid rgba(255,255,255,0.4)",
};

export default function VideoManagementPage() {
  return (
    <Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))"
        gap={2}
        mb={4}
      >
        {stats.map((stat) => (
          <Paper
            key={stat.label}
            sx={{
              p: 2.5,
              borderRadius: 2,
              ...glassCardStyle,
            }}
          >
            <Typography fontSize={13} color="text.secondary">
              {stat.label}
            </Typography>
            <Typography
              fontSize={22}
              fontWeight={600}
              color={stat.highlight ? "#ff6b6b" : "inherit"}
            >
              {stat.value}
            </Typography>
          </Paper>
        ))}
      </Box>

      <Paper
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          ...glassCardStyle,
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns="3fr 4fr 2fr 2fr"
          px={3}
          py={2}
          bgcolor="#fafafa"
          fontSize={13}
          fontWeight={600}
        >
          <span>Feature / Video Title</span>
          <span>Description / Details</span>
          <span>Status</span>
          <span>Actions</span>
        </Box>

        {videos.map((video) => (
          <Box
            key={video.id}
            display="grid"
            gridTemplateColumns="3fr 4fr 2fr 2fr"
            px={3}
            py={2}
            alignItems="center"
            borderTop="1px solid #f0f0f0"
          >
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar
                variant="rounded"
                sx={{ width: 42, height: 28, bgcolor: "#e0e0e0" }}
              />
              <Typography fontSize={14} fontWeight={500}>
                {video.title}
              </Typography>
            </Box>

            <Typography fontSize={13} color="text.secondary">
              {video.description}
            </Typography>

            <Box display="flex" alignItems="center" gap={1}>
              <Switch checked={video.published} />
              <Chip
                size="small"
                label={video.published ? "Published" : "Draft"}
                color={video.published ? "success" : "default"}
              />
            </Box>

            <Box display="flex" gap={1}>
              <IconButton size="small">
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton size="small">
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        ))}

        <Box
          px={3}
          py={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontSize={12}
          color="text.secondary"
        >
          <span>Showing 4 of 24 videos</span>

          <Box display="flex" gap={1}>
            <Button size="small" variant="outlined">
              Previous
            </Button>
            <Button size="small" variant="outlined">
              1
            </Button>
            <Button size="small" variant="outlined">
              2
            </Button>
            <Button size="small" variant="outlined">
              Next
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
