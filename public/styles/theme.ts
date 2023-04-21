import { MantineThemeOverride, rem } from "@mantine/core";
import styled from "@emotion/styled";

const theme: MantineThemeOverride = {
  colors: {
    primary: [
      "#C5F0FF",
      "#9CE6FF",
      "#76DDFF",
      "#54D4FF",
      "#36CCFF",
      "#1AC5FF",
      "#00BFFF",
      "#00ACE6",
      "#009BCF",
      "#008BBA",
    ],
    secondary: [
      "#FFE0F0",
      "#FFB5DA",
      "#FF8DC6",
      "#FF69B4",
      "#FF45A2",
      "#FF2592",
      "#FF0783",
      "#EC0076",
      "#D5006A",
      "#BF0060",
    ],
    accent: [
      "#FFEAC5",
      "#FFDC9C",
      "#FFCF76",
      "#FFC354",
      "#FFB836",
      "#FFAE1A",
      "#FFA500",
      "#E69400",
      "#CF8600",
      "#BA7800",
    ],
  },
  primaryColor: "primary",
  primaryShade: { light: 6, dark: 8 },

  // colorScheme: "dark",
  fontFamily: "Greycliff CF, sans-serif",

  components: {
    TextInput: {
      styles: {
        root: { padding: "3px" },
      },
    },
    // the code blocks, they do nothing
    Highlight: {
      styles: {
        root: {
          highlightColor: "blue",
        },
      },
    },
  },

  globalStyles: (theme) => ({
    a: {
      padding: "1px",
    },
    // mark: {
    //   background: theme.colors.accent[6],
    // },
  }),
};

export default theme;
