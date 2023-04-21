import React, { useState } from "react";
import {
  Header,
  Container,
  Tabs,
  Burger,
  MediaQuery,
  Transition,
  Paper,
  TextInput,
} from "@mantine/core";
import { Icon360View, IconSearch } from "@tabler/icons-react";
import theme from "../../public/styles/theme";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNavbar = () => {
  const [navbarOpened, setNavbarOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const burgerLabel = navbarOpened ? "Close navigation" : "Open navigation";
  const router = useRouter();
  const HEADER_HEIGHT = 70;

  const menuLinks = loggedIn
    ? [
        { label: "Home", path: "/" },
        { label: "Logout", path: "/logout" },
        { label: "Contact us", path: "/contact" },
        { label: "About", path: "/about" },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "Login", path: "/login" },
        { label: "Register", path: "/register" },
        { label: "About", path: "/about" },
      ];

  const links = (
    <Tabs color="accent" defaultValue={router.pathname}>
      <Tabs.List>
        {menuLinks.map((item, _index) => (
          <Link key={item.label} href={item.path} legacyBehavior>
            <Tabs.Tab
              value={item.path}
              onClick={() => {
                setNavbarOpened(false);
              }}
            >
              {item.label}
            </Tabs.Tab>
          </Link>
        ))}
      </Tabs.List>
    </Tabs>
  );

  return (
    <Header
      withBorder={false}
      style={{
        background:
          theme.colorScheme === "dark"
            ? theme.colors.primary[8]
            : theme.colors.primary[6],
      }}
      height={{ base: HEADER_HEIGHT, md: HEADER_HEIGHT }}
      p="md"
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Icon360View
          style={{
            background:
              theme.colorScheme === "dark"
                ? theme.colors.accent[9]
                : theme.colors.accent[6],
          }}
          color={
            theme.colorScheme === "dark"
              ? theme.colors.primary[9]
              : theme.colors.primary[6]
          }
        />

        <TextInput
          size="sm"
          variant="filled"
          placeholder="Search...."
          icon={<IconSearch />}
        />

        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          {links}
        </MediaQuery>

        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            color={
              theme.colorScheme === "dark"
                ? theme.colors.accent[9]
                : theme.colors.accent[6]
            }
            opened={navbarOpened}
            onClick={() => {
              setNavbarOpened((opened) => !opened);
            }}
            size="sm"
            mr="xl"
            aria-label={burgerLabel}
            title={burgerLabel}
          />
        </MediaQuery>
        <Transition
          transition="slide-down"
          duration={20}
          mounted={navbarOpened}
        >
          {(_styles) => (
            <Paper
              style={{
                position: "absolute",
                top: HEADER_HEIGHT,
                left: 0,
                right: 0,
                zIndex: 0,
                borderTopRightRadius: 0,
                borderTopLeftRadius: 0,
                borderTopWidth: 0,
                overflow: "hidden",
              }}
            >
              {links}
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
};

export default TopNavbar;
