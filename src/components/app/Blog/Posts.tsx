import { SimpleGrid, Container } from "@mantine/core";
import { Post } from "interfaces/blog";
import { CardPost } from "../Home";

interface PostGridProps {
  posts: Post[];
}

export function Posts({ posts }: PostGridProps) {
  const features = posts
    .slice(0, 3) // Obtener solo los 3 primeros elementos
    .map((post, index) => <CardPost post={post} key={index} />);

  return (
    <Container size={"xl"} style={{marginTop:'20px', position:'relative'}} >
      <SimpleGrid
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 30 }}
        verticalSpacing={{ base: "xl", md: 30 }}
      >
        {posts?.map((post, index)=>(
            <CardPost post={post} key={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
