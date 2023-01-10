import Link from "next/link";
import SubscribeForm from "../subscribe-form";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["content-wrapper"]}>
        <section className={styles["nft-marketplace-info"]}>
          <h5>NFT Marketplace</h5>
          <p>NFT marketplace UI created with Anima for Figma.</p>
          <p className={styles["join-community"]}>Join our community</p>
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
        <section className={styles.explore}>
          <h5>Explore</h5>
          <div className={styles.navigation}>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="/rankings">Rankings</Link>
            <Link href="/connect-wallet">Connect a wallet</Link>
          </div>
        </section>
        <section className={styles.subscribe}>
          <h5>Join our weekly digest</h5>
          <p>Get exclusive promotions & updates straight to your inbox.</p>
          <SubscribeForm />
        </section>
      </div>
      <section></section>
    </footer>
  );
};

export default Footer;
