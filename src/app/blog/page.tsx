//helpers
import { axiosInstanceBackend } from "helpers/axios";

//components
import { Banner, Posts } from "components/app/Blog";
import { Blog } from "interfaces/blog";

export const metadata = {
  title:"Hebert Villafuerte | Blog",
  description:"Bienvenido a mi blog, encontrarás contenido relacionado a tecnología y programación."
}

export default async  function BlogPage() {
  const { data } = await axiosInstanceBackend.get<Blog>("/blog/");

  return (
    <>
      <Banner />
      <Posts posts={data?.results} />
    </>
  );
}
