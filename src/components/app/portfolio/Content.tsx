"use client";

import { Container, Title, Box, SimpleGrid } from "@mantine/core";

//components
import { CardProject } from "./CardProject";

//constants
import { projects } from "constants/works";

//styles
import classes from "./Content.module.css";

export function Content() {
  return (
    <Container size={"xl"}>
      <div style={{ height: "60px" }}></div>
      <Title order={3} className="title">
        Otros proyectos
      </Title>
      <Box>
        <SimpleGrid
          cols={{ base: 1, sm: 2, md: 3 }}
          spacing={{ base: "xl", md: 30 }}
          verticalSpacing={{ base: "xl", md: 30 }}
        >
          {projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
}
