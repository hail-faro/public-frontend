import { AppShell, useMantineTheme } from "@mantine/core";
import React, { useState } from "react";
import TopNavBar from "./TopNavbar";

const Layout = ({ children }) => {
  const theme = useMantineTheme();
  const [sideBarOpen, setSideBarOpen] = useState(false);

  return (
    <AppShell padding="md" navbarOffsetBreakpoint={"sm"} header={<TopNavBar />}>
      {children}
    </AppShell>
  );
};

export default Layout;
