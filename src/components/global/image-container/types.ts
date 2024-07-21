import { ImgHTMLAttributes } from "react";

export interface IImageContainerProps
  extends ImgHTMLAttributes<HTMLImageElement> {
  classe?: string;
}
