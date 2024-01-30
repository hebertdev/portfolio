import { ActionIcon, Box, Card, Group, Text, Title, rem } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconExternalLink,
  IconUser,
} from "@tabler/icons-react";

//styles
import classes from "./CardProject.module.css";
import { Project } from "interfaces/portfolio";

interface CardProjectProps {
  project: Project;
}

export function CardProject({ project }: CardProjectProps) {
  return (
    <div>
      <Card shadow="sx" radius="md" withBorder padding={0}>
        <Card.Section className={classes.container_img}>
          <img
            src={project.image}
            className={classes.img}
            alt={project.image}
          />
        </Card.Section>
      </Card>
      <Box
        style={{
          marginTop: "5px",
        }}
      >
        <Title order={4}>{project.name}</Title>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          {project.demo && (
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              component="a"
              href={project.demo!}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <IconExternalLink
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          )}
          {project.github && (
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              component="a"
              href={project.github!}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <IconBrandGithub
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          )}

          {project.play && (
            <ActionIcon
              size="lg"
              color="gray"
              variant="subtle"
              component="a"
              href={project.play}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <IconBrandYoutube
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          )}
        </Group>
      </Box>
    </div>
  );
}
