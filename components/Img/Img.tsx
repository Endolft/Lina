import { basePath } from "@/constants";
import Image, { ImageProps } from "next/image";

/** Wrapper for Next's Image component. Adds basepath to correctly locate static assets. */
const Img = ({ src, alt, ...props }: ImageProps) => (
  <Image
    src={
      typeof src === "string" && src.startsWith("/assets")
        ? `${basePath}${src}`
        : src
    }
    alt={alt}
    {...props}
  />
);

export default Img;
