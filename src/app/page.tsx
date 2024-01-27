//components
import {
  Banner,
  About,
  FeaturedProjects,
  MyProcess,
  WeWork,
  Blog,
} from "components/app/Home";
import { Suspense } from "react";

export const metadata = {
  title: "Hebert Villafuerte | Software & Web developer",
  description:
    "Bienvenido, Soy. Hebertdev. Software & web developer. Disfruto creando aplicaciones hermosas y confiables para Internet y teléfonos. Arequipa - Perú.",
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <About />
      <FeaturedProjects />
      <MyProcess />
      <WeWork />
      <Suspense fallback={<div>loading...</div>}>
        <Blog />
      </Suspense>
    </>
  );
}
