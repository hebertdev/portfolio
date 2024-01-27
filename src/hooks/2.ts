import { useState, useEffect } from "react";
import axios from "axios";

export function useImageGradient(image: string) {
  const [gradient, setGradient] = useState<string>(
    "linear-gradient(to bottom, transparent, transparent)"
  ); // Colores degradado inicial

  useEffect(() => {
    // Obtener colores de la imagen
    const getImageColors = async () => {
      try {
        const response = await axios.get(image, { responseType: "arraybuffer" });
        const buffer = Buffer.from(response.data, "binary");

        const blob = new Blob([buffer], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(blob);

        const img = new Image();
        img.crossOrigin = "anonymous"; // Permitir la carga de imágenes desde otro dominio
        img.src = imageUrl;

        img.onload = function () {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            return;
          }
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);

          const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

          // Obtener colores primarios (puedes ajustar esta lógica según tus necesidades)
          const primaryColors = [
            `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`,
            `rgb(${imageData[4]}, ${imageData[5]}, ${imageData[6]})`,
            // Puedes agregar más colores según sea necesario
          ];

          // Crear el degradado con los colores obtenidos
          const newGradient = `linear-gradient(to bottom, ${primaryColors.join(", ")})`;

          // Aplicar el degradado al estado
          setGradient(newGradient);
        };
      } catch (error) {
        console.error("Error al cargar la imagen:", error);
      }
    };

    getImageColors();
  }, [image]);

  return {
    gradient
  };
}
