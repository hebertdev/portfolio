"use client";

import Link from "next/link";

//mantine
import { Text, Container, ActionIcon, Group, rem, Box } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";

import classes from "./Footer.module.css";

const data = [
  {
    title: "ALGÚN PROYECTO?",
    links: [
      { label: "Aplicación web", link: "#", target: "" },
      { label: "Tienda online", link: "#", target: "" },
      { label: "Sitio de contenido", link: "#", target: "" },
      { label: "Página de aterrizaje", link: "#", target: "" },
      { label: "Blog", link: "#", target: "" },
    ],
  },
  {
    title: "BOLETÍN",
    links: [{ label: "En construcción", link: "#", target: "" }],
  },
  {
    title: "CONTACTO",
    links: [
      {
        label: "LinkedIn",
        link: "https://linkedin.com/in/hebertdev",
        target: "_blank",
      },
      {
        label: "GitHub",
        link: "https://github.com/hebertdev/",
        target: "_blank",
      },
      {
        label: "Instagram",
        link: "https://instagram.com/hebertdev1",
        target: "_blank",
      },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component={Link}
        href={link.link}
        target={link.target}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size={"xl"}>
        <div className={classes.logo}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft: "5px",
                marginBottom: "10px",
              }}
              className={classes.title}
            >
              HEBERTDEV
            </Text>
          </Box>
          <Text size="xs" c="dimmed" className={classes.description}>
            Disfruto creando aplicaciones hermosas y confiables para Internet y
            teléfonos.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter} size={"xl"}>
        <Text c="dimmed" size="md">
          © {new Date().getFullYear()} Hebertdev - Todos los derechos
          reservados.
        </Text>

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
      </Container>
    </footer>
  );
}
