import { ReactNode } from "react";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { AppNavbar } from "@/components/layout/AppNavbar";

export default function VideosLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AppSidebar />

      <div style={{ flex: 1, backgroundColor: "#f4f6f8" }}>
        <AppNavbar />

        <main style={{ padding: 24 }}>{children}</main>
      </div>
    </div>
  );
}
