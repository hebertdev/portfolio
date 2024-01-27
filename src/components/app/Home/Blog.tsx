//helpers
import { axiosInstanceBackend } from "helpers/axios";

//components
import { CardPost } from ".";

//mantineui
import {
  Card,
  Container,
  SimpleGrid,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";

//styles
import classes from "./Blog.module.css";

//interfaces
import { Blog, Post } from "interfaces/blog";

export async function Blog() {
  const { data } = await axiosInstanceBackend.get<Blog>("/blog/");

  return (
    <Container size={"xl"}>
      <Title order={3} className="title">
        Últimos posts <br />
        Descubre contenido tech y más
      </Title>
      <PostGrid posts={data.results} />
    </Container>
  );
}

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
  const features = posts
    .slice(0, 3) // Obtener solo los 3 primeros elementos
    .map((post, index) => <CardPost post={post} key={index} />);

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 3 }}
      spacing={{ base: "xl", md: 30 }}
      verticalSpacing={{ base: "xl", md: 30 }}
    >
      {features}
    </SimpleGrid>
  );
}
