import HomeView from "@views/home";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFT Marketplace</title>
        <meta name="description" content="Home page of NFT Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://anima-uploads.s3.amazonaws.com/projects/6357ce7c8a65b2f16659918c/files/storefront.png"
        />
      </Head>
      <HomeView />
    </>
  );
}
