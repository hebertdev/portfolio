//mantineui
import {
  Card,
  Container,
  Title,
  ThemeIcon,
  Text,
  SimpleGrid,
} from "@mantine/core";

//styles
import classes from "./MyProcess.module.css";

export function MyProcess() {
  return (
    <Container size={"xl"} style={{ marginTop: "70px" }}>
      <Title order={3} className="title">
        Mi proceso
      </Title>
      <FeaturesGrid />
    </Container>
  );
}

import {
  IconCircleDashedNumber1,
  IconCircleDashedNumber3,
  IconCircleDashedNumber2,
  IconCircleDashedNumber4,
} from "@tabler/icons-react";

export const MOCKDATA = [
  {
    icon: IconCircleDashedNumber1,
    title: "Descubrimiento",
    description:
      "Esta es la fase en la que me sumerjo profundamente en tu mundo y te conozco. Antes de poder diseñar adecuadamente tu sitio web de alto rendimiento, necesito entenderte a ti, tus puntos de dolor y tu audiencia.",
  },
  {
    icon: IconCircleDashedNumber2,
    title: "Diseño",
    description:
      "Tomando lo que he aprendido sobre ti, diseño un sitio web a medida que se adapta a tus necesidades únicas, representando con precisión tu marca y manteniendo la estética y la usabilidad para tu audiencia.",
  },
  {
    icon: IconCircleDashedNumber3,
    title: "Construcción",
    description:
      "Una vez que estés satisfecho con los diseños, procederé a construirlos, asegurándome de que todo esté optimizado siguiendo las prácticas modernas de la web, como velocidad, seguridad y confiabilidad.",
  },
  {
    icon: IconCircleDashedNumber4,
    title: "Lanzamiento",
    description:
      "Después de completar la construcción y verificar todo junto con tu aprobación, es el momento de lanzar tu sitio web. En esta fase, también proporcionaré algunos videos de entrenamiento sobre cómo puedes agregar contenido a tu sitio web para que puedas hacerlo tú mismo.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <Card shadow="sx" padding="md" radius="md" withBorder>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon stroke={1.5} />
      </ThemeIcon>
      <Text className={classes.sub_title_project}>{title}</Text>
      <Text>{description}</Text>
    </Card>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, md: 4 }}
      spacing={{ base: "xl", md: 20 }}
      verticalSpacing={{ base: "xl", md: 20 }}
      className={classes.container}
    >
      {features}
    </SimpleGrid>
  );
}
