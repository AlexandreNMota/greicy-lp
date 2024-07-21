import { FC } from "react";
import { IImageContainerProps } from "./types";
import "./image-container.css";
export const ImageContainer: FC<IImageContainerProps> = ({
  classe,
  ...props
}: IImageContainerProps) => {
  return <img className={classe} {...props} />;
};
