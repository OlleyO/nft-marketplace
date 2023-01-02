import { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

interface Props {
  heading: string;
  subheading?: string;
  button?: JSX.Element;
  contentWrapper?: string;
}

const PageSection: React.FC<PropsWithChildren<Props>> = ({
  heading,
  subheading,
  button,
  contentWrapper,
  children,
}) => {
  return (
    <section className={styles.section}>
      <article>
        <div className={styles.heading}>
          <div>
            <h3>{heading}</h3>
            {subheading && <p className={styles.subheading}>{subheading}</p>}
          </div>
          {button && <div className={styles["button-wrapper"]}>{button}</div>}
        </div>
        {children}
      </article>
    </section>
  );
};

export default PageSection;
