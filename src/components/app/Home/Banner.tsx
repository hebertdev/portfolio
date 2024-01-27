"use client";

//react-scroll
import { Link } from "react-scroll";

//components
import { AnimationTextBanner } from "./AnimationTextBanner";

//mantineui
import {
  Box,
  Container,
  Text,
  Title,
  Button,
  Group,
  ActionIcon,
  rem,
  Center,
} from "@mantine/core";

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

//styles
import classes from "./Banner.module.css";

export function Banner() {
  return (
    <Box className={classes.container_general}>
      <Container size={"xl"}>
        <Box className={classes.container_all}>
          <Box className={classes.container_info}>
            <Text className={classes.banner_text}>Hola, soy</Text>
            <Title className={classes.banner_title}>
              Hebertdev <br />
              <span className={classes.title_gradient}>
                Software & web developer
              </span>
            </Title>
            <Text className={classes.banner_text}>
              Disfruto creando aplicaciones <br /> hermosas y confiables para
              Internet y teléfonos.
            </Text>
            <Text className={classes.banner_text} style={{ marginTop: "15px" }}>
              Arequipa - Perú
            </Text>
            <Center>
              <Group
                gap={0}
                className={classes.social}
                justify="flex-end"
                wrap="nowrap"
              >
                <ActionIcon
                  size="lg"
                  color="gray"
                  variant="subtle"
                  component="a"
                  href="https://github.com/hebertdev"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <IconBrandGithub
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  color="gray"
                  variant="subtle"
                  component="a"
                  href="https://www.instagram.com/hebertdev1"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <IconBrandInstagram
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  color="gray"
                  variant="subtle"
                  component="a"
                  href="https://www.youtube.com/hebertdev"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <IconBrandYoutube
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  color="gray"
                  variant="subtle"
                  component="a"
                  href="https://web.facebook.com/hebertdev1/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <IconBrandFacebook
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                </ActionIcon>
                <ActionIcon
                  size="lg"
                  color="gray"
                  variant="subtle"
                  component="a"
                  href="https://www.linkedin.com/in/hebertdev/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                >
                  <IconBrandLinkedin
                    style={{ width: rem(18), height: rem(18) }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Group>
            </Center>
            <Link smooth={true} to="form_contact" href=".">
              <Button
                style={{ fontSize: "15px", marginTop: "20px" }}
                variant="outline"
              >
                Contáctame
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
      <AnimationTextBanner />
    </Box>
  );
}
