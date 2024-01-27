//react-scroll
import { Link } from "react-scroll";

import { Carousel } from "@mantine/carousel";
import { Box, Button, Card, Container, Image, Title } from "@mantine/core";

//styles
import classes from "./WeWorkMobile.module.css";

//interface
import { Project } from "./WeWork";

interface WeWorkMobileProps {
  projects: Project[];
  handleSetProject: (value: string) => void;
}

export function WeWorkMobile({
  projects,
  handleSetProject,
}: WeWorkMobileProps) {
  const slides = projects.map((project) => (
    <Carousel.Slide key={project.value}>
      <Card p={0} radius={"md"} className={classes.container}>
        <Image src={project.image} />
        <Box className={classes.container_item}>
          <Box>
            <Title order={2} className={classes.project_title}>
              {project.name}
            </Title>
            <Link smooth={true} to="form_contact" href=".">
              <Button
                style={{
                  marginTop: "10px",
                }}
                color="white"
                variant="outline"
                onClick={() => handleSetProject(project.value)}
              >
                Contáctame
              </Button>
            </Link>
          </Box>
        </Box>
      </Card>
    </Carousel.Slide>
  ));
  return (
    <>
      <Container size={"xl"}>
        <Box style={{ marginBottom: "20px" }}>
          <Carousel
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
              indicator: classes.carouselIndicator,
            }}
          >
            {slides}
          </Carousel>
        </Box>
      </Container>
    </>
  );
}
