import Link from "next/link";

//mantineui
import { Avatar, Group, Text, ThemeIcon, UnstyledButton } from "@mantine/core";

//styles
import classes from "./Header.module.css";
import { apps } from "constants/apps";

export function Apps() {
  const my_apps = apps.map((item) => (
    <UnstyledButton
      className={classes.subLink}
      key={item.title}
      component={Link}
      href={item.link}
      target="_blank"
    >
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default">
          <Avatar src={item.logo} radius={"xs"} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));
  return my_apps;
}
