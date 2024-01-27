//react-scroll
import { Link } from "react-scroll";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";

//mantine
import { Box, Text, Button, em } from "@mantine/core";

//styles
import classes from "./WeWorkPc.module.css";

//interface
import { Project } from "./WeWork";

interface WeWorkPcProps {
  projects: Project[];
  handleSetProject: (value: string) => void;
}

export function WeWorkPc({ projects, handleSetProject }: WeWorkPcProps) {
  return (
    <Box style={{ width: "100%" }}>
      <div>
        <Swiper
          slidesPerView={2}
          centeredSlides={true}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={classes.mySwiper}
          initialSlide={1}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.value}>
              <Box className={classes.projectContainer}>
                <picture>
                  <img
                    alt={project.name}
                    src={project.image}
                    className={classes.projectImage}
                  />
                </picture>
                <Box className={classes.projectDetails}>
                  <Text className={classes.projectTitle}>{project.name}</Text>
                  <Text className={classes.projectSeparator}>
                    <small>
                      <small>{"////////////////////"}</small>
                    </small>
                  </Text>
                  <Link smooth={true} to="form_contact" href=".">
                    <Button
                      style={{
                        marginBottom: "20px",
                      }}
                      color="white"
                      variant="outline"
                      onClick={() => handleSetProject(project.value)}
                    >
                      Contáctame
                    </Button>
                  </Link>
                </Box>
                <Box
                  className={classes.bg_difuminated}
                  style={{ background: project.color1 }}
                ></Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Box>
  );
}
