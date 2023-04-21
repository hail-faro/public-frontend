import { AppShell, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import { TopNavbar } from "./navigation";

const Layout = ({ children }) => {
  const theme = useMantineTheme();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <AppShell padding="md" navbarOffsetBreakpoint={"sm"} header={<TopNavbar />}>
      {children}
    </AppShell>
  );
};

export default Layout;
