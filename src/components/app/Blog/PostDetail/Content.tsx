import Link from "next/link";

//components
import { ShareButton } from "./ShareButton";

//mantine
import { Container, Box, Title, Text, Divider } from "@mantine/core";

//styles
import classes from "./Content.module.css";

//interfaces
import { Post } from "interfaces/blog";

interface ContentProps {
  post: Post;
}

export function Content({ post }: ContentProps) {
  return (
    <Container size={"xl"}>
      <Box className={classes.container}>
        <Box className={classes.container_left}>
          <Title order={1} className={classes.title}>
            {post.title}
          </Title>
          <Text className={classes.description}>{post.description}</Text>
          <Divider />
          <Box
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></Box>
        </Box>
        <Box className={classes.container_right}>
          <Box>
            <Title order={2} className={classes.sub_title}>
              Compartir
            </Title>
            <Text>
              Si te ha gustado este post, compártelo con tus amigos y de esta
              manera me ayudas a mantener este sitio web.
            </Text>
            <ShareButton post={post} />
          </Box>
          <Box className={classes.social}>
            <Title order={2} className={classes.sub_title}>
              Redes sociales
            </Title>
            <Text
              component={Link}
              href={"https://www.instagram.com/hebertdev1/"}
              target="_blank"
            >
              Instagram: @hebertdev1
            </Text>
            <Text
              component={Link}
              href={"https://github.com/hebertdev"}
              target="_blank"
            >
              GitHub: @hebertdev
            </Text>
            <Text
              component={Link}
              href={"https://www.linkedin.com/in/hebertdev/"}
              target="_blank"
            >
              LinkedIn: @hebertdev
            </Text>
            <Text
              component={Link}
              href={"https://www.youtube.com/hebertdev"}
              target="_blank"
            >
              Youtube: @hebertdev
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
