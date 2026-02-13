import Image, { type ImageProps } from "next/image";
import { assetPath } from "@/lib/constants";

type BasePathImageProps = Omit<ImageProps, "src"> & {
  src: string;
};

export function BasePathImage({ src, alt, ...props }: BasePathImageProps) {
  return <Image src={assetPath(src)} alt={alt} {...props} />;
}
