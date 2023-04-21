import { Container, Grid, Paper, Text } from "@mantine/core";

const ForOhFor = () => {
  return (
    <Container>
      <Grid align="center" justify="center" style={{ minHeight: "100vh" }}>
        <Grid.Col span={8}>
          <Paper shadow="md" style={{ padding: "xl" }}>
            <Text align="center" size="xl">
              404
            </Text>
            <Text align="center" size="md">
              Oops! This scene is still in the cutting room
            </Text>
            <Text align="center" size="md">
              Let's roll another clip in the meantime
            </Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ForOhFor;
