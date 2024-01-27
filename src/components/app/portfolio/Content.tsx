import { Container, Title } from "@mantine/core";

//constants
import { projects } from "constants/works";


//styles
import classes from "./Content.module.css";

export function Content() {
  return (
    <Container size={"xl"}>
        <div style={{height:'60px'}}></div>
      <Title order={3} className="title">
        Otros proyectos
      </Title>
    </Container>
  );
}
