import Link from "next/link";
import Button from "../button";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link className={styles.logo} href="/">
          <i className="icon-storefront" />
          NFT Marketplace
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="marketplace">Marketplace</Link>
          </li>
          <li>
            <Link href="rankings">Rankings</Link>
          </li>
          <li>
            <Link href="connect-wallet">Connect a wallet</Link>
          </li>
          {/* TODO: Link Button */}
          <li>
            <Button variant="secondary" icon={<i className="icon-user" />}>
              Sign up
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
