import styles from "./styles.module.scss";

interface Props {
  heading: string;
  subhead?: string;
  suffix?: JSX.Element;
}

const SectionHeadline: React.FC<Props> = ({ heading, subhead, suffix }) => {
  return (
    <div className={styles["section-headline"]}>
      <div>
        <h3 className={styles.heading}>{heading}</h3>
        {subhead && <p className={styles.subhead}>{subhead}</p>}
      </div>
      {suffix && <div className={styles.suffix}>{suffix}</div>}
    </div>
  );
};

export default SectionHeadline;
