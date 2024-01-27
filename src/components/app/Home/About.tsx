"use client";

//mantineui
import { Carousel } from "@mantine/carousel";

import {
  Box,
  Container,
  Title,
  Text,
  rem,
  useMantineTheme,
} from "@mantine/core";

//styles
import classes from "./About.module.css";

//assets
import only_dev from "assets/developer1.webp";
import js_log from "assets/js.png";
import python_log from "assets/python.png";
import go_log from "assets/go.png";
import dart_log from "assets/dart.png";
import react_log from "assets/react.png";
import next_log from "assets/next.png";
import django_log from "assets/django.png";
import css_log from "assets/css.png";
import html_log from "assets/html.png";
import postres_log from "assets/postgres.png";
import typescript_log from "assets/typescript.png";
import docker_log from "assets/docker.png";
import banner from "assets/banner.webp";

export function About() {
  const theme = useMantineTheme();

  return (
    <Container size={"xl"}>
      <Box className={classes.container_all}>
        <Box className={classes.container_carrousel}>
          <Carousel
            withIndicators
            loop
            classNames={{
              root: classes.carousel,
              controls: classes.carouselControls,
            }}
          >
            <Carousel.Slide>
              <Box className={classes.container_img_dev}>
                <picture>
                  <img
                    src={banner.src}
                    alt="developer"
                    style={{
                      width: "100%",
                      height: "100%",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                      padding: "10px",
                      borderRadius: "80px",
                    }}
                  />
                </picture>
              </Box>
            </Carousel.Slide>
            <Carousel.Slide>
              <Box className={classes.container_imgs}>
                <picture style={{ width: "100%" }}>
                  <img
                    src={only_dev.src}
                    alt="developer"
                    style={{ width: "100%", height: "100%" }}
                  />
                </picture>
                <picture style={{ width: "100%" }}>
                  <img
                    src={html_log.src}
                    alt="html logo"
                    title="html"
                    className={`${classes.img_tool} ${classes.html_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={css_log.src}
                    alt="css logo"
                    className={`${classes.img_tool} ${classes.css_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={js_log.src}
                    alt="js logo"
                    className={`${classes.img_tool} ${classes.js_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={react_log.src}
                    alt="react logo"
                    className={`${classes.img_tool} ${classes.react_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={next_log.src}
                    alt="next logo"
                    className={`${classes.img_tool} ${classes.next_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={postres_log.src}
                    alt="postres logo"
                    className={`${classes.img_tool} ${classes.postres_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={python_log.src}
                    alt="python logo"
                    className={`${classes.img_tool} ${classes.python_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={django_log.src}
                    alt="django logo"
                    className={`${classes.img_tool} ${classes.django_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={docker_log.src}
                    alt="docker logo"
                    className={`${classes.img_tool} ${classes.docker_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={typescript_log.src}
                    alt="typescript logo"
                    className={`${classes.img_tool} ${classes.typescript_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={go_log.src}
                    alt="go logo"
                    className={`${classes.img_tool} ${classes.go_logo}`}
                  />
                </picture>

                <picture style={{ width: "100%" }}>
                  <img
                    src={dart_log.src}
                    alt="dart logo"
                    className={`${classes.img_tool} ${classes.dart_logo}`}
                  />
                </picture>
              </Box>
            </Carousel.Slide>
          </Carousel>
        </Box>

        <Box className={classes.container_description}>
          <Box>
            <Title order={2} className={classes.title}>
              Sobre mi
            </Title>
            <Text className={classes.description}>
              Soy Hebert Villafuerte, un desarrollador full stack con
              experiencia en Django y React. Poseo la habilidad de integrar
              estas tecnologías de manera robusta para desarrollar aplicaciones
              web de alta calidad, escalables y en tiempo récord. Disfruto
              colaborar en equipo y cuento con habilidades de comunicación
              excepcionales.
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
