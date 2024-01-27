"use client";

import { useState, useEffect } from "react";

import { RWebShare } from "react-web-share";

//mantine
import { Button } from "@mantine/core";

//interface
import { Post } from "interfaces/blog";
import { IconShare } from "@tabler/icons-react";

interface ShareButtonProps {
  post: Post;
}

export function ShareButton({ post }: ShareButtonProps) {
  const [rutita, setRutita] = useState("");

  useEffect(() => {
    setRutita(window.location.href);
  }, [post]);

  return (
    <RWebShare
      data={{
        text: post.description,
        url: rutita,
        title: post.title,
      }}
      onClick={() => console.log("shared successfully!")}
    >
      <Button variant="contained" leftSection={<IconShare size={14} />}  style={{marginTop:'10px'}}>compartir</Button>
    </RWebShare>
  );
}
