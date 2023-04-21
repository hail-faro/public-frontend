import { Box, Button, Container, Group, Highlight, Text } from "@mantine/core";
import { createStyles, keyframes, rem } from "@mantine/core";

const bounce = keyframes({
  "0%": { backgroundPosition: "0px 0px, 25px 0px, 25px -25px, 0px 25px" },
  "50%": { backgroundPosition: "0px 50px, 0px 50px, 0px 0px, 0px 0px" },
  "100%": { backgroundPosition: "0px 0px, 25px 0px, 25px -25px, 0px 25px" },
});

const styles = createStyles((theme) => ({
  background_animation: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    // opacity: 0.8,
    background: [
      theme.fn.linearGradient(
        135,
        `${
          theme.colorScheme === "dark"
            ? theme.colors.primary[9]
            : theme.colors.primary[6]
        } 25%`,
        "transparent 25%"
      ),
      theme.fn.linearGradient(
        225,
        `${
          theme.colorScheme === "dark"
            ? theme.colors.primary[9]
            : theme.colors.primary[6]
        } 25%`,
        "transparent 25%"
      ),
      theme.fn.linearGradient(
        45,
        `${
          theme.colorScheme === "dark"
            ? theme.colors.primary[9]
            : theme.colors.primary[6]
        } 25%`,
        "transparent 25%"
      ),
      theme.fn.linearGradient(
        315,
        `${
          theme.colorScheme === "dark"
            ? theme.colors.primary[9]
            : theme.colors.primary[6]
        } 25%`,
        `${
          theme.colorScheme === "dark"
            ? theme.colors.secondary[9]
            : theme.colors.secondary[6]
        } 25%`
      ),
    ],
    // "linear-gradient(135deg, #1e1f1c 25%, transparent 25%), linear-gradient(225deg, #1e1f1c 25%, transparent 25%), linear-gradient(45deg, #1e1f1c 25%, transparent 25%),linear-gradient(315deg, #1e1f1c 25%, #0a0a0a 25%)",
    backgroundSize: "50px, 50px",
    backgroundPosition: "0 0, 25px 0, 25px -25px, 0px, 25px",
    animation: `${bounce} 4s linear infinite`,
  },
  immersive_scrolling: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: rem(2),
    fontSize: rem(1.2),
    lineHeight: 1.6,
    overflowWrap: "break-word",
    wordWrap: "break-word",
    hyphens: "auto",
  },

  "@media (max-width: 767px)": {
    immersive_scrolling: {
      fontSize: rem(1),
      padding: rem(1),
    },
  },
}));

import React from "react";
const useStyles = createStyles;
const Index = () => {
  const { classes } = styles();
  return (
    <>
      <Box className={classes.background_animation} />

      <Container>
        <Text size="xl" align="center" style={{ marginBottom: rem(1) }}>
          Vilumos
        </Text>
        <Box className={classes.immersive_scrolling}>
          <Text component="p" size="sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a
            convallis dui. Sed vel rutrum augue. Quisque sem metus, lacinia sit
            amet mattis sit amet, auctor quis metus. Nulla sagittis ipsum eget
            nisi varius blandit. Vivamus pellentesque tristique eros quis
            aliquet. Donec vitae sem feugiat, ullamcorper lorem et, consequat
            est. Cras vel mauris viverra, lobortis ipsum non, consequat nisi.
            Donec in eleifend mauris. Donec cursus elementum turpis et tempus.{" "}
          </Text>
          <Text component="p" size="sm">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum. Cras porttitor metus
            justo, ut fringilla velit vulputate tincidunt. Integer in volutpat
            libero. Nulla in sagittis nisi. Curabitur aliquet quam id dui
            posuere blandit. Curabitur ac velit nunc. Pellentesque eget est
            ante. In bibendum nisi enim, ut accumsan elit cursus vitae. Sed
            euismod, urna in consequat tincidunt, libero nisl fermentum tellus,
            et consectetur dui nulla at dolor. Nulla facilisi.
          </Text>
          <Text size="sm">
            {" "}
            <Highlight highlight="sapien">
              Phasellus ullamcorper egestas posuere. Nam consequat tristique
              enim non pulvinar. Sed dictum augue non libero blandit, id
              vestibulum velit congue. Fusce vel convallis nisl. Pellentesque
              fringilla feugiat sapien, ac sodales sapien aliquam vel. Proin
              varius nisl et turpis condimentum ullamcorper. Curabitur ut arcu
              nec dui interdum dapibus. Quisque at scelerisque lorem.
            </Highlight>
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Index;
