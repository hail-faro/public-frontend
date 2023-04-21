import React, { useState } from "react";
import {
  Box,
  MediaQuery,
  Paper,
  createStyles,
  keyframes,
  Stepper,
  TextInput,
  rem,
  Title,
  Container,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import RegisterForm from "../components/RegisterForm";
import EmailConfirmationForm from "../components/EmailConfirmationForm";
import FriendFinder from "../components/FriendFinder";
import PersonalTopics from "../components/PersonalTopics";

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
}));

const Register = () => {
  const [active, setActive] = useState(0);
  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };
  const { classes } = styles();

  return (
    <>
      <Box className={classes.background} />
      <Container w={800}>
        <Stepper
          size="sm"
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          allowNextStepsSelect={false}
        >
          <Stepper.Step
            label="Create an account"
            description="Record your account data"
          >
            <RegisterForm />
          </Stepper.Step>

          <Stepper.Step
            label="Confirm your email"
            description="Just need to greenlight your email"
          >
            <EmailConfirmationForm />
          </Stepper.Step>

          <Stepper.Step
            label="Find your Friends"
            description="Let's cast some friends"
          >
            <FriendFinder />
          </Stepper.Step>

          <Stepper.Step
            label="Pick your interests"
            description="Now capture your interests"
          >
            <PersonalTopics />
          </Stepper.Step>
        </Stepper>
      </Container>
    </>
  );
};

export default Register;
