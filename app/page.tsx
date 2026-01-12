"use client";

import { Box, Button, Typography, Container } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fff5f5 0%, #ffffff 60%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center">
          <Typography
            fontSize={{ xs: 36, md: 48 }}
            fontWeight={700}
            lineHeight={1.2}
            mb={2}
          >
            Unlock Knowledge with
            <Box component="span" color="#ff6b6b">
              EduStream
            </Box>
          </Typography>

          <Typography
            fontSize={16}
            color="text.secondary"
            maxWidth={600}
            mx="auto"
            mb={5}
          >
            A modern educational platform where anyone can learn, explore, and
            share knowledge through high-quality video content. Learn from
            experts or become one.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.4,
              fontSize: 15,
              fontWeight: 500,
              textTransform: "none",
              borderRadius: 2,
              backgroundColor: "#ff6b6b",
              boxShadow: "0 8px 24px rgba(255,107,107,0.35)",
              "&:hover": {
                backgroundColor: "#ff5252",
                boxShadow: "0 12px 32px rgba(255,107,107,0.45)",
              },
            }}
          >
            Browse Videos
          </Button>

          <Typography fontSize={13} color="text.secondary" mt={3}>
            No account required to start exploring
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
