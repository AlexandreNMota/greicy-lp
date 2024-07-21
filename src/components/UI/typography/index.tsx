import { TypographyProps } from "@mui/material";
import { FC } from "react";
import { StyledTypography } from "./style";

export const CustomTypography: FC<TypographyProps> = ({
    children,
    ...props
}: TypographyProps) => {
    return (
        <StyledTypography {...props}>
            {children}
        </StyledTypography>
    );
}