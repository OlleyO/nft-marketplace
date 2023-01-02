import type { AppProps } from "next/app";

import "@styles/globals.scss";
import "@styles/typography.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
