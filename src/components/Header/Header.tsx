"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

//components
import { Apps } from "./Apps";

//mantineui
import { useDisclosure } from "@mantine/hooks";

import {
  Group,
  Button,
  UnstyledButton,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  useMantineTheme,
  Container,
  ActionIcon,
  Collapse,
} from "@mantine/core";

import { IconChevronDown, IconLanguage } from "@tabler/icons-react";

//styles
import classes from "./Header.module.css";

//assets
import { AppsButton, DarkModeButton } from ".";
import { ColorSchemeToggle } from "components/ColorSchemeToggle/ColorSchemeToggle";

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box>
      <header
        className={`${classes.header} ${
          scrolling ? classes.header_with_scrolling : ""
        }`}
      >
        <Container className={classes.header_container} size={"xl"}>
          <Group justify="space-between" h="100%">
            <Box className={classes.logo} component={Link} href={"/"} />
            <Group h="100%" gap={0} visibleFrom="sm">
              <Link href="/" className={classes.link}>
                Home
              </Link>
              <Link href="/portfolio" className={classes.link}>
                Portafolio
              </Link>
              <Link href="/blog" className={classes.link}>
                Blog
              </Link>
            </Group>
            <Group visibleFrom="sm">
              <AppsButton />
              {/* <ActionIcon variant="default" size={"lg"} radius={"md"}>
                <IconLanguage />
              </ActionIcon> */}
              <DarkModeButton />
            </Group>
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Link href="/" className={classes.link} onClick={toggleDrawer}>
            Home
          </Link>

          <Link
            href="/portfolio"
            className={classes.link}
            onClick={toggleDrawer}
          >
            Portafolio
          </Link>
          <Link href="/blog" className={classes.link} onClick={toggleDrawer}>
            Blog
          </Link>

          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Apps
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>
            <Box style={{ padding: "0 20px" }}>
              <Apps />
            </Box>
          </Collapse>

          <Divider my="sm" />
          <ColorSchemeToggle />
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
