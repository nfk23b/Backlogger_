import React from "react";
import clsx from 'clsx';
import styles from './Typography.module.scss'
import { TypographyType, TypographyMargin, TypographyAlignment } from "./types";

interface TypographyProps {
    variant: TypographyType,
    margin?: TypographyMargin,
    alignment?: TypographyAlignment,
    children: string | React.ReactNode
}

const Typography = ({ variant, margin, alignment, children, ...props }: TypographyProps) => {
const Component = variant;

return (
    <Component
    className={clsx(
        styles.typography,
        styles[`typography--variant-${variant}`],
        styles[`typography--margin-${margin}`],
        styles[`typography--alignment-${alignment}`],
    )}
    {...props}
    >
        {children}
    </Component>
);
};
  
export default Typography;