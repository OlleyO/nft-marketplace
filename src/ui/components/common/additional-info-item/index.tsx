import cn from "classnames";

import styles from "./styles.module.scss";

interface Props {
  className?: string;
  title: string;
  value: string;
}

const AdditionalInfoItem: React.FC<Props> = ({ className, title, value }) => {
  return (
    <div className={cn(styles["additinal-info-item"], className)}>
      <h4>{value}</h4>
      <span>{title}</span>
    </div>
  );
};

export default AdditionalInfoItem;
