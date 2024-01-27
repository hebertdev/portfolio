"use client";
import {
  Button,
  Group,
  SegmentedControl,
  useMantineColorScheme,
  MantineColorScheme,
  Center,
  rem,
} from "@mantine/core";
import { IconSun, IconMoon, IconDeviceLaptop } from "@tabler/icons-react";
import { useState } from "react";

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <>
      {/* <Group justify="center" grow pb="xl" px="md">
        <Button
          onClick={() => setColorScheme("light")}
          leftSection={<IconSun />}
        >
          Light
        </Button>
        <Button onClick={() => setColorScheme("auto")}>System</Button>
        <Button
          onClick={() => setColorScheme("dark")}
          leftSection={<IconMoon />}
        >
          Dark
        </Button>
      </Group> */}

      <SegmentedControl
        value={colorScheme}
        onChange={(value: any) => setColorScheme(value)}
        data={[
          {
            value: "light",
            label: (
              <Center style={{ gap: 10 }}>
                <IconSun style={{ width: rem(16), height: rem(16) }} />
                <span>Light</span>
              </Center>
            ),
          },
          {
            value: "auto",
            label: (
              <Center style={{ gap: 10 }}>
                <IconDeviceLaptop style={{ width: rem(16), height: rem(16) }} />
                <span>System</span>
              </Center>
            ),
          },
          {
            value: "dark",
            label: (
              <Center style={{ gap: 10 }}>
                <IconMoon style={{ width: rem(16), height: rem(16) }} />
                <span>Dark</span>
              </Center>
            ),
          },
        ]}
        size="md"
        m={10}
        fullWidth
      />
    </>
  );
}
