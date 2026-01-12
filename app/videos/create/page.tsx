"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Switch } from "@/components";

export default function CreateVideoPage() {
  const [published, setPublished] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      title: "",
      description: "",
      videoUrl: "",
      published,
      createdAt: new Date().toISOString(),
    };

    console.log("Create Video Payload:", data);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f6f8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: "0px 12px 30px rgba(0,0,0,0.08)",
            p: 4,
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography fontSize={24} fontWeight={600}>
                Create New Video
              </Typography>
              <Typography fontSize={13} color="text.secondary">
                Share your knowledge with the community
              </Typography>
            </Box>

            <IconButton size="small">
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <Divider sx={{ my: 3 }} />

          <TextField
            placeholder="e.g. Advanced JavaScript Patterns"
            label="Video Title"
            fullWidth
            required
            margin="normal"
          />

          <TextField
            placeholder="https://youtube.com/watch?v=..."
            label="Video URL (YouTube, Vimeo, etc.)"
            fullWidth
            required
            margin="normal"
          />

          <TextField
            placeholder="Briefly describe what students will learn in this video..."
            label="Description"
            fullWidth
            multiline
            rows={3}
            margin="normal"
          />

          <Box
            sx={{
              mt: 3,
              p: 2,
              borderRadius: 2,
              backgroundColor: "#f9fafb",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography fontSize={14} fontWeight={500}>
                Publication Status
              </Typography>
              <Typography fontSize={12} color="text.secondary">
                Currently set to Draft (Private)
              </Typography>
            </Box>

            <Switch
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}

            />
          </Box>

          <Box display="flex" gap={2} mt={4}>
            <Button
              variant="outlined"
              fullWidth
              sx={{
                textTransform: "none",
                borderRadius: 2,
                fontWeight: 500,
              }}
            >
              Save Draft
            </Button>

            <Button
              variant="contained"
              fullWidth
              sx={{
                textTransform: "none",
                borderRadius: 2,
                fontWeight: 500,
                backgroundColor: "#ff6b6b",
                "&:hover": {
                  backgroundColor: "#ff5252",
                },
              }}
            >
              Publish Video
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
