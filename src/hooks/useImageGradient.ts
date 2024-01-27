import { useState, useEffect } from "react";

export function useImageGradient(image: string) {
  const [gradient, setGradient] = useState<string>(
    "linear-gradient(to bottom, transparent, transparent)"
  );

  const handleImageLoad = () => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = image;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return;
      }

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

      const primaryColors = Array.from({ length: 3 }, (_, i) => {
        const startIndex = i * 4;
        return `rgb(${imageData[startIndex]}, ${imageData[startIndex + 1]}, ${imageData[startIndex + 2]})`;
      });

      const newGradient = `linear-gradient(to bottom, ${primaryColors.join(", ")})`;

      setGradient(newGradient);
    };
  };

  useEffect(() => {
    handleImageLoad();
  }, [image]);

  return {
    gradient,
  };
}
