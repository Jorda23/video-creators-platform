"use client";

import HomeNavbar from "@/components/layout/HomeNavbar";
import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      <HomeNavbar />
      {children}
    </Box>
  );
}
