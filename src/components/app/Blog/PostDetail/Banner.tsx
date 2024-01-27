"use client";

//mantine ui
import { Container, Card, Text, Group, Center, rem , Box} from "@mantine/core";

import { IconEye } from "@tabler/icons-react";

//styles
import classes from "./Banner.module.css";

//interfaces
import { Post } from "interfaces/blog";
import { useImageGradient } from "hooks/useImageGradient";

interface BannerProps {
  post: Post;
}

export function Banner({ post }: BannerProps) {
  const { gradient } = useImageGradient(post?.picture);

  return (
    <Container size={"xl"} style={{ position: "relative" }}>
      <Box style={{ height: "65px", width: "100%" }} />
      <Box className={classes.cinematic} style={{ background: gradient }} />
      <Card p="lg" shadow="lg" className={classes.card} radius="md">
        <Box
          className={classes.image}
          style={{
            backgroundImage: `url(${post?.picture})`,
            backgroundPosition: "center",
          }}
        />
        <Box className={classes.overlay} />

        <Box className={classes.content}>
          <Box>
            <Group justify="space-between" gap="xs">
              <Text size="sm" className={classes.author}>
                @hebertdev
              </Text>

              <Group gap="lg">
                <Center>
                  <IconEye
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                    color={"white"}
                  />
                  <Text size="sm" className={classes.bodyText}>
                    {post.visitor_counter}
                  </Text>
                </Center>
              </Group>
            </Group>
          </Box>
        </Box>
      </Card>
    </Container>
  );
}
