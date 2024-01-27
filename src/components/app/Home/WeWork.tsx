"use client";

import { useState } from "react";

//mantineui
import { Box, Title, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

//components
import { WeWorkPc } from "./WeWorkPc";

//assets
import web_app from "assets/working/web_app.webp";
import comerce_site from "assets/working/comerce_site.webp";
import content_site from "assets/working/content_site.webp";
import landing_page from "assets/working/landing_page.webp";
import blog_dev from "assets/working/blog_dev.webp";
import { WeWorkMobile } from "./WeWorkMobile";
import { ContactUs } from ".";

export function WeWork() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const [project, setProject] = useState("1");

  const handleSetProject = (value: string) => {
    setProject(value);
  };

  return (
    <Box>
      <Title order={3} className="title">
        Construyamos algo <br /> asombroso
      </Title>
      {isMobile ? (
        <WeWorkMobile projects={projects} handleSetProject={handleSetProject} />
      ) : (
        <WeWorkPc projects={projects} handleSetProject={handleSetProject} />
      )}
      <ContactUs
        projects={projects}
        handleSetProject={handleSetProject}
        project={project}
      />
    </Box>
  );
}

export interface Project {
  value: string;
  name: string;
  label: string;
  description: string;
  image: string;
  color1: string;
  color2: string;
}

const projects: Project[] = [
  {
    value: "2",
    name: "Tienda en linea",
    label: "Online store",
    description: "Desarrollo de comercio electronico",
    image: comerce_site.src,
    color1: "#1e4860",
    color2: "#8e9b7a",
  },
  {
    value: "1",
    name: "Aplicación web",
    label: "Web app",
    description: "Desarrollo de web app",
    image: web_app.src,
    color1: "#0f1e88",
    color2: "#693364",
  },

  {
    value: "3",
    name: "Sitio de contenido",
    label: "Content site",
    description: "Desarrollo de sitio de contenido",
    image: content_site.src,
    color1: "#172ba8",
    color2: "#5a9dc9",
  },
  {
    value: "4",
    name: "Página de aterrizaje",
    label: "Landing page",
    description: "Desarrollo de landing page",
    image: landing_page.src,
    color1: "#151a1c",
    color2: "#4b329b",
  },
  {
    value: "5",
    name: "Blog",
    label: "Blog",
    description: "Desarrollo de blog",
    image: blog_dev.src,
    color1: "#6d1e2e",
    color2: "#905834",
  },
];
