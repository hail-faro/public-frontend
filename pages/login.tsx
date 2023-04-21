import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Input,
  MediaQuery,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  createStyles,
  keyframes,
  rem,
} from "@mantine/core";
import Link from "next/link";
import { useForm } from "@mantine/form";

const slide = keyframes({
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0% 50%" },
});

const styles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    minHeight: "100%",
    minWidth: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundSize: "400% 400%",
    backgroundImage: theme.fn.linearGradient(
      -45,
      `${theme.colors.primary[6]} 0%`,
      `${theme.colors.primary[6]} 25%`,
      `${theme.colors.secondary[6]} 25%`,
      `${theme.colors.secondary[6]} 50%`,
      `${theme.colors.accent[6]} 50%`,
      `${theme.colors.accent[6]} 75%`,
      `${theme.colors.primary[6]} 75%`,
      `${theme.colors.primary[6]} 100%`
    ),
    zIndex: -1,
    animation: `${slide} 40s linear infinite`,
  },

  login_form: {
    minHeight: rem(900),
    // maxWidth: rem(500),
    width: "45%",
    minWidth: rem(450),
    // display: "flex",
  },
}));

const Login = () => {
  const { classes } = styles();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  return (
    <>
      <Box className={classes.background} />

      <Box className={classes.wrapper}>
        <MediaQuery smallerThan="sm" styles={{ maxWidth: "100%" }}>
          <Paper className={classes.login_form} radius={0} p="xl" withBorder>
            <Title order={2} ta="center" mt="md" mb={50}>
              Log In to Something New!
            </Title>

            <form onSubmit={form.onSubmit(console.log)}>
              <TextInput
                label="Email or Username"
                placeholder="Email or Username"
                size="md"
                {...form.getInputProps("username")}
              />
              <PasswordInput
                label="Password"
                placeholder="Password"
                mt="md"
                size="md"
                {...form.getInputProps("password")}
              />
              <Checkbox label="Keep me logged in" mt="xl" size="md" />
              <Button fullWidth mt="xl" size="md" type="submit">
                Login
              </Button>
            </form>

            <Text ta="center" mt="md">
              Need to signup?{" "}
              <Link href="/register" passHref legacyBehavior>
                <a>Register here</a>
              </Link>
            </Text>
          </Paper>
        </MediaQuery>
      </Box>
    </>
  );
};

export default Login;
