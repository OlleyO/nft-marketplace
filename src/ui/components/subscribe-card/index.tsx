import Button from "@components/common/button";
import SubscribeForm from "@components/common/subscribe-form";
import Image from "next/image";
import styles from "./styles.module.scss";

const SubscribeCard: React.FC = () => {
  return (
    <div className={styles["subscribe-card"]}>
      <div className={styles.left}>
        <div className={styles["image-wrapper"]}>
          <Image alt="" src="/images/Photo.png" fill />
        </div>
      </div>
      <div className={styles.right}>
        <h3>Join Out Weekly Digest</h3>
        <p>Get exclusive promotions & updates straight to your inbox.</p>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default SubscribeCard;
