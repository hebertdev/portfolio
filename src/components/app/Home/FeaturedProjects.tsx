//mantineui
import { IconBrandGithub, IconBrandYoutube } from "@tabler/icons-react";
import { Box, Container, Title, Text, Button, ActionIcon } from "@mantine/core";

//styles
import classes from "./FeaturedProjects.module.css";

//assets
import seiftree from "assets/portfolio/seiftree_dark.webp";
import culqi from "assets/portfolio/react-culqi.webp";
import album from "assets/portfolio/album_dark.webp";

export function FeaturedProjects() {
  return (
    <>
      <Title order={3} className="title">
        Proyectos destacados
      </Title>
      <Box className={classes.container_all}>
        <Container
          size={"xl"}
          style={{
            height: "100%",
          }}
        >
          {featured_projects.map((project) => (
            <Box className={classes.container} key={project.id}>
              <Box className={classes.container_left}>
                <Title order={4} className={classes.title_project}>
                  <span>{project.id}.</span> {project.title}
                </Title>
                <Box className={classes.container_content}>
                  <Box
                    className={classes.vertical_line}
                    style={{ background: `${project.color}` }}
                  />

                  <Box className={classes.container_content_tex}>
                    <Title order={5} className={classes.sub_title_project}>
                      {project.sub_title}
                    </Title>
                    <Text>{project.description}</Text>
                    <Box className={classes.container_project_footer}>
                      <Box
                        className={classes.container_role}
                        style={{
                          borderTop: `1px solid ${project.color}`,
                          borderBottom: `1px solid ${project.color}`,
                        }}
                      >
                        <Text>Role: {project.role}</Text>
                      </Box>
                      <Box
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Button
                          color={project.color}
                          component="a"
                          href={project.website}
                          target="_blank"
                          referrerPolicy="no-referrer"
                        >
                          Ir al sitio{" "}
                        </Button>
                        {project.github && (
                          <ActionIcon
                            variant="default"
                            size={"lg"}
                            component="a"
                            href={project.github}
                            target="_blank"
                            referrerPolicy="no-referrer"
                          >
                            <IconBrandGithub />
                          </ActionIcon>
                        )}
                        {project.youtube && (
                          <ActionIcon
                            variant="default"
                            size={"lg"}
                            component="a"
                            href={project.youtube}
                            target="_blank"
                            referrerPolicy="no-referrer"
                          >
                            <IconBrandYoutube />
                          </ActionIcon>
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={classes.container_right}>
                <Box
                  className={classes.container_right_img}
                  style={{ background: `${project.color}e6` }}
                >
                  <picture>
                    <img src={project.img} alt={project.title} />
                  </picture>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
      </Box>
    </>
  );
}

const featured_projects = [
  {
    id: "01",
    title: "Seiftre",
    sub_title: "Seguridad y cifrado en la nube para cuentas y notas",
    sub_title_en: "",
    description:
      "Seiftree es una herramienta que permite a los usuarios guardar sus cuentas digitales en la nube de forma segura, ya que requiere una clave secreta además de la contraseña de inicio de sesión para acceder a cada una de ellas. También permite a los usuarios cifrar notas pequeñas.",
    description_en: "",
    role: "Designer, backend & frontend developer, devOps.",
    role_en: "",
    github: "",
    youtube: "",
    website: "https://seiftree.netlify.app/",
    color: "#1bd575",
    img: seiftree.src,
  },
  {
    id: "02",
    title: "React-Culqi-Next",
    sub_title: "Procesador de pagos",
    sub_title_en: "",
    description:
      "Una biblioteca de React para la integración con el procesador de pagos Culqi, compatible con Next.js",
    description_en: "",
    role: "Designer, frontend developer.",
    role_en: "",
    github: "https://github.com/hebertdev/react-culqi-next",
    youtube: "",
    website: "https://react-culqi.hebertdev.net/",
    color: "#f69f27",
    img: culqi.src,
  },
  {
    id: "03",
    title: "World Cup Album",
    sub_title: "Intercambia figuritas y completa tu álbum en línea",
    sub_title_en: "",
    description:
      "Aplicación web que permite a los usuarios llenar el álbum del Mundial Qatar 2022 y jugar con amigos para intercambiar figuritas y ver cuántas figuritas han completado en su álbum. Está desarrollada con Next.js y Django, y ofrece una experiencia divertida.",
    description_en: "",
    role: "Designer, backend & frontend developer, devOps.",
    role_en: "",
    github: "https://github.com/hebertdev/fifa_album_client",
    youtube: "https://www.youtube.com/watch?v=GHsnheaQgwk",
    website: "https://worldcupalbum.vercel.app/",
    color: "#a7082c",
    img: album.src,
  },
];
