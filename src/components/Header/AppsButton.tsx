//components
import { Apps } from "./Apps";

//mantineui
import {
  ActionIcon,
  Avatar,
  Divider,
  Group,
  HoverCard,
  SimpleGrid,
  Text,
} from "@mantine/core";

import { IconApps } from "@tabler/icons-react";

export function AppsButton() {
  return (
    <>
      <HoverCard
        width={600}
        position="bottom"
        radius="md"
        shadow="md"
        withinPortal
      >
        <HoverCard.Target>
          <ActionIcon variant="default" size={"lg"} radius={"md"}>
            <IconApps />
          </ActionIcon>
        </HoverCard.Target>

        <HoverCard.Dropdown style={{ overflow: "hidden" }}>
          <Group justify="space-between" px="md">
            <Text fw={500}>Apps</Text>
            {/* <Anchor href="#" fz="xs">
              View all
            </Anchor> */}
          </Group>

          <Divider my="sm" />

          <SimpleGrid cols={2} spacing={0}>
            <Apps />
          </SimpleGrid>
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  );
}
