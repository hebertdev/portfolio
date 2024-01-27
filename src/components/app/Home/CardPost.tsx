"use client";

import Link from "next/link";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

//mantineui
import { Box, Card, Text, Title } from "@mantine/core";
import { Post } from "interfaces/blog";
import { IconUser } from "@tabler/icons-react";

//styles
import classes from "./CardPost.module.css";

interface PostProps {
  post: Post;
}

dayjs.extend(relativeTime);

export function CardPost({ post }: PostProps) {
  return (
    <div>
      <Card
        shadow="sx"
        radius="md"
        withBorder
        padding={0}
        component={Link}
        href={`/blog/${post.slug}`}
      >
        <Card.Section className={classes.container_img}>
          <img src={post.picture} className={classes.img} alt={post.title} />
        </Card.Section>
      </Card>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        <Text size="md">
          <IconUser size={"15px"} /> hebertdev
        </Text>
        <Text size="xs">{dayjs(post.created).fromNow()}</Text>
      </Box>

      <Box>
        <Link href={`/blog/${post.slug}`}>
          <Title order={4}>{post.title}</Title>
        </Link>
      </Box>
    </div>
  );
}
