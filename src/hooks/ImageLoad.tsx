import React, { useState, useEffect } from "react";



interface ImageLoadProps {
  src: string;
  alt?: string;
  extraStyles?: React.CSSProperties;
}

const ImageLoad: React.FC<ImageLoadProps> = ({
  src,
  alt = "",
  extraStyles,
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [currentSrc, updateSrc] = useState<string>("");

  useEffect(() => {
    // Iniciar la carga de la imagen original
    const imageToLoad = new Image();
    imageToLoad.src = src;
    imageToLoad.onload = () => {
      // Cuando la imagen se carga, reemplazar la src y establecer loading en false
      setLoading(false);
      updateSrc(src);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      style={{
        width: "100%",
      }}
      alt={alt}
    />
  );
};

ImageLoad.displayName = "ImageLoad";
export default ImageLoad;
