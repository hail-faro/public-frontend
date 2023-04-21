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

const styles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  login_form: {
    minHeight: rem(900),
    // maxWidth: rem(500),
    width: "45%",
    minWidth: rem(450),
    // display: "flex",
  },
}));

const RegisterForm = () => {
  const { classes } = styles();

  const form = useForm({
    initialValues: {
      firstName: "",
      lastName: "",
      age: null,
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  return (
    <>
      <Box className={classes.wrapper}>
        <MediaQuery smallerThan="sm" styles={{ maxWidth: "100%" }}>
          <Paper className={classes.login_form} radius={0} p="xl">
            <Title order={2} ta="center" mt="md" mb={50}>
              Let's get this show rolling....
            </Title>

            <form onSubmit={form.onSubmit(console.log)}>
              <TextInput
                label="First Name"
                placeholder="First Name"
                size="md"
                {...form.getInputProps("firstName")}
              />
              <TextInput
                label="Last Name"
                placeholder="Last Name"
                size="md"
                {...form.getInputProps("lastName")}
              />
              {/* Age */}
              <TextInput
                label="Age"
                placeholder="Age"
                size="md"
                {...form.getInputProps("age")}
              />

              <TextInput
                label="Email"
                placeholder="Email"
                size="md"
                {...form.getInputProps("email")}
              />
              <PasswordInput
                label="Password"
                placeholder="Password"
                mt="md"
                size="md"
                {...form.getInputProps("password")}
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm Password"
                mt="md"
                size="md"
                {...form.getInputProps("confirmPassword")}
              />
              <Button fullWidth mt="xl" size="md" type="submit">
                Submit
              </Button>
            </form>

            <Text ta="center" mt="md">
              Already have an account?{" "}
              <Link href="/login" passHref legacyBehavior>
                <a>Login here</a>
              </Link>
            </Text>
          </Paper>
        </MediaQuery>
      </Box>
    </>
  );
};

export default RegisterForm;
