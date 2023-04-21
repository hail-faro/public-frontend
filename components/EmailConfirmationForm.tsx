import React from "react";
import {
  Title,
  TextInput,
  Box,
  MediaQuery,
  Paper,
  createStyles,
  rem,
  Button,
} from "@mantine/core";

const styles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const EmailConfirmationForm = () => {
  const { classes } = styles();
  return (
    <>
      <Box className={classes.wrapper}>
        <MediaQuery smallerThan="sm" styles={{ maxWidth: "100%" }}>
          <Paper radius={0} p="xl">
            <Title>Confirm your email</Title>
            <form>
              <TextInput
                placeholder="Confirmation code"
                label="Enter the confirmation code from the email you entered"
              ></TextInput>

              <Button fullWidth mt="xl" size="md" type="submit">
                Submit
              </Button>
            </form>
          </Paper>
        </MediaQuery>
      </Box>
    </>
  );
};

export default EmailConfirmationForm;
