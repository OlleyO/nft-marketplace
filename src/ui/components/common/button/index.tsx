import Link from "next/link";
import { HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  className?: string;
  href?: string;
  icon?: JSX.Element;
  variant: "primary" | "secondary" | "tertiary";
  outlined?: boolean;
}

const Button: React.FC<Props> = ({
  className,
  href,
  icon,
  variant,
  children,
  outlined,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        styles.button,
        styles[variant],
        {
          [styles.outlined]: outlined,
        },
        className
      )}
    >
      {icon}
      {href ? <Link href={href}>{children}</Link> : children}
    </button>
  );
};

export default Button;
