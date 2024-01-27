//helpers
import { axiosInstanceBackend } from "helpers/axios";

//components
import { Banner, Content } from "components/app/Blog/PostDetail";

//interfaces
import { Post } from "interfaces/blog";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const { data } = await axiosInstanceBackend.get<Post>(`/blog/${slug}`);

  const images = [data.picture];
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [...images, ...previousImages],
    }, 
  };
}

interface BlogDetailPageProps {
  params: { slug: string };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = params;
  const { data } = await axiosInstanceBackend.get<Post>(`/blog/${slug}`);

  return (
    <>
      <Banner post={data} />
      <Content post={data} />
    </>
  );
}
