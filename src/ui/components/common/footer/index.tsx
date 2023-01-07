import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["content-wrapper"]}>
        <section>
          <h5>NFT Marketplace</h5>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p>Join our community</p>
          <ul>
            <li>
              <a href="">
                <i className="icon-discord-logo" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="icon-youtube-logo" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="icon-instagram-logo" />
              </a>
            </li>
          </ul>
        </section>
        <section></section>
        <section></section>
      </div>
      <section></section>
    </footer>
  );
};

export default Footer;
