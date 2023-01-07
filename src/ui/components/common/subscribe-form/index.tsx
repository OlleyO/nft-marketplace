import Button from "@components/common/button";

import styles from "./styles.module.scss";

const SubscribeForm = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Enter your email here" type="email" />
      <Button
        className={styles.button}
        variant="secondary"
        icon={<i className="icon-envelope-simple" />}
      >
        Subscribe
      </Button>
    </form>
  );
};

export default SubscribeForm;
