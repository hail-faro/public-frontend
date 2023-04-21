import { Button, Group, Text } from "@mantine/core";
import React from "react";

const Home = () => {
  return (
    <>
      <Text>Home</Text>
      <div style={{ background: "#FFFFFF", padding: "50px" }}>
        <Group position="center">
          <Button>Reg</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="light">Light</Button>
        </Group>
        <Group position="center">
          <Button color="secondary">Reg</Button>
          <Button color="secondary" variant="outline">
            Outline
          </Button>
          <Button color="secondary" variant="light">
            Light
          </Button>
        </Group>
        <Group position="center">
          <Button color="accent">Reg</Button>
          <Button color="accent" variant="outline">
            Outline
          </Button>
          <Button color="accent" variant="light">
            Light
          </Button>
        </Group>
      </div>

      <div style={{ background: "#333333", padding: "50px" }}>
        <Group position="center">
          <Button>Reg</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="light">Light</Button>
        </Group>
        <Group position="center">
          <Button color="secondary">Reg</Button>
          <Button color="secondary" variant="outline">
            Outline
          </Button>
          <Button color="secondary" variant="light">
            Light
          </Button>
        </Group>
        <Group position="center">
          <Button color="accent">Reg</Button>
          <Button color="accent" variant="outline">
            Outline
          </Button>
          <Button color="accent" variant="light">
            Light
          </Button>
        </Group>
      </div>
    </>
  );
};

export default Home;
