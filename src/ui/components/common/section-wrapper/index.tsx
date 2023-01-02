import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

const SectionWrapper: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      <section>{children}</section>
    </div>
  );
};

export default SectionWrapper;
