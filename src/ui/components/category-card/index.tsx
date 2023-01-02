import Image from "next/image";
import { Category } from "src/core/types";
import styles from "./styles.module.scss";
import cn from "classnames";

interface Props {
  className?: string;
  category: Category;
}

const CategoryCard: React.FC<Props> = ({ className, category }) => {
  const { name, image } = category;

  const iconClassNameBuilder = (name: string): string => {
    switch (name) {
      case "art":
        return "icon-paint-brush";
      case "collectibles":
        return "icon-swatches";
      case "music":
        return "icon-music-notes";
      case "photography":
        return "icon-camera";
      case "video":
        return "icon-video-camera";
      case "utility":
        return "icon-magic-wand";
      case "sport":
        return "icon-basketball";
      case "virtual worlds":
        return "icon-planet";
      default:
        return "";
    }
  };

  return (
    <div className={cn(styles["category-card"], className)}>
      <div className={styles["image-wrapper"]}>
        <Image src={image} fill alt={name} />
        <i className={iconClassNameBuilder(name)} />
      </div>

      <div className={styles["category-name"]}>
        <h5>{name}</h5>
      </div>
    </div>
  );
};

export default CategoryCard;
