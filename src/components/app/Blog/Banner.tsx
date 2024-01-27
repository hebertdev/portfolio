"use client";

import { useImageGradient } from "hooks/useImageGradient";

//mantine ui
import { Container, Card, Text, Title, Box } from "@mantine/core";

//styles
import classes from "./Banner.module.css";

const image =
  "https://res.cloudinary.com/hebertdev1/image/upload/q_64/v1705786826/developer_tilo4r.webp";

export function Banner() {
  const { gradient } = useImageGradient(image);

  return (
    <Container size={"xl"} style={{ position: "relative" }}>
      <Box style={{ height: "65px", width: "100%" }} />
      <Box className={classes.cinematic} style={{ background: gradient }} />
      <Card
        p="lg"
        shadow="lg"
        className={classes.card}
        radius="md"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box className={classes.image} />
        <Box className={classes.overlay}>
          <Box style={{ padding: "15px" }}>
            <Title>Bienvenido a mi Blog</Title>
            <Text>
              encontrarás contenido relacionado a tecnología y programación.
            </Text>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
