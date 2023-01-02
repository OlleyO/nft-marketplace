import ArtistCard from "@components/artist-card";
import ArtistCommonCard from "@components/common/artist-card";
import CategoryCard from "@components/category-card";
import CollectionCard from "@components/collection-card";
import AdditionalInfoItem from "@components/common/additional-info-item";
import Button from "@components/common/button";
import Header from "@components/common/header";
import SectionHeadline from "@components/common/section-headline";
import HighlightedNftCard from "@components/highlighted-nft-card";
import NftCard from "@components/nft-card";
import Image from "next/image";
import {
  Artist,
  Category,
  Nft,
  TrendingCollectionOverview,
} from "src/core/types";

import styles from "./styles.module.scss";
import Timer from "@components/timer";

const collectionData: TrendingCollectionOverview[] = [
  {
    id: 0,
    collectionName: "DSGN Animals",
    primaryNft: "/images/Primary Photo Placeholder.png",
    secondaryNft1: "/images/Secondary Photo Placeholder.png",
    secondaryNft2: "/images/Secondary Photo Placeholder-1.png",
    artist: {
      id: 0,
      avatar: "/images/Avatar Placeholder-sm.png",
      username: "MrFox",
    },
    numberOfNfts: 1025,
  },
  {
    id: 1,
    collectionName: "Magic Mushrooms",
    primaryNft: "/images/Primary Photo Placeholder-1.png",
    secondaryNft1: "/images/Secondary Photo Placeholder-2.png",
    secondaryNft2: "/images/Secondary Photo Placeholder-3.png",
    artist: {
      id: 1,
      avatar: "/images/Avatar Placeholder-1-sm.png",
      username: "Shroomie",
    },
    numberOfNfts: 1025,
  },
  {
    id: 2,
    collectionName: "Disco Machines",
    primaryNft: "/images/Primary Photo Placeholder-2.png",
    secondaryNft1: "/images/Secondary Photo Placeholder-4.png",
    secondaryNft2: "/images/Secondary Photo Placeholder-5.png",
    artist: {
      id: 1,
      avatar: "/images/Avatar Placeholder-2-sm.png",
      username: "BeKind2Robots",
    },
    numberOfNfts: 1025,
  },
];

const topCreators: Artist[] = [
  {
    id: 0,
    avatar: "/images/Avatar Placeholder.png",
    username: "Keepitreal",
    rank: 1,
    totalSales: 34.53,
  },
  {
    id: 1,
    avatar: "/images/Avatar Placeholder-1.png",
    username: "DigiLab",
    rank: 2,
    totalSales: 34.53,
  },
  {
    id: 2,
    avatar: "/images/Avatar Placeholder-2.png",
    username: "GravityOne",
    rank: 3,
    totalSales: 34.53,
  },
  {
    id: 3,
    avatar: "/images/Avatar Placeholder-3.png",
    username: "Juanie",
    rank: 4,
    totalSales: 34.53,
  },
  {
    id: 4,
    avatar: "/images/Avatar Placeholder-4.png",
    username: "BlueWhale",
    rank: 5,
    totalSales: 34.53,
  },
  {
    id: 5,
    avatar: "/images/Avatar Placeholder-5.png",
    username: "Mr Fox",
    rank: 6,
    totalSales: 34.53,
  },
  {
    id: 6,
    avatar: "/images/Avatar Placeholder-6.png",
    username: "Shroomie",
    rank: 7,
    totalSales: 34.53,
  },
  {
    id: 7,
    avatar: "/images/Avatar Placeholder-7.png",
    username: "Robotica",
    rank: 8,
    totalSales: 34.53,
  },
  {
    id: 8,
    avatar: "/images/Avatar Placeholder-8.png",
    username: "RustyRobot",
    rank: 9,
    totalSales: 34.53,
  },
  {
    id: 9,
    avatar: "/images/Avatar Placeholder-9.png",
    username: "Animakid",
    rank: 10,
    totalSales: 34.53,
  },
  {
    id: 10,
    avatar: "/images/Avatar Placeholder-10.png",
    username: "Dotgu",
    rank: 11,
    totalSales: 34.53,
  },
  {
    id: 11,
    avatar: "/images/Avatar Placeholder-11.png",
    username: "Ghibilier",
    rank: 12,
    totalSales: 34.53,
  },
];

const categories: Category[] = [
  {
    id: 0,
    image: "/images/Image Placeholder-7.png",
    name: "art",
  },
  {
    id: 1,
    image: "/images/Image Placeholder-4.png",
    name: "collectibles",
  },
  {
    id: 2,
    image: "/images/Image Placeholder.png",
    name: "music",
  },
  {
    id: 3,
    image: "/images/Image Placeholder-1.png",
    name: "photography",
  },
  {
    id: 4,
    image: "/images/Image Placeholder-2.png",
    name: "video",
  },
  {
    id: 5,
    image: "/images/Image Placeholder-3.png",
    name: "utility",
  },
  {
    id: 6,
    image: "/images/Image Placeholder-5.png",
    name: "sport",
  },
  {
    id: 7,
    image: "/images/Image Placeholder-6.png",
    name: "virtual words",
  },
];

const nfts: Nft[] = [
  {
    id: 0,
    name: "Distant Galaxy",
    artist: {
      id: 192,
      username: "MoonDancer",
      avatar: "/images/avatar-1.png",
    },
    priceETH: 1.63,
    highestBidwETH: 0.33,
    image: "/images/nft-1.png",
  },
  {
    id: 1,
    name: "Life on Edena",
    artist: {
      id: 193,
      username: "NebulaKid",
      avatar: "/images/avatar-2.png",
    },
    priceETH: 1.63,
    highestBidwETH: 0.33,
    image: "/images/nft-2.png",
  },
  {
    id: 0,
    name: "AstroFiction",
    artist: {
      id: 192,
      username: "Spaceone",
      avatar: "/images/avatar-3.png",
    },
    priceETH: 1.63,
    highestBidwETH: 0.33,
    image: "/images/nft-3.png",
  },
];

const HomeView: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section>
          <article className={styles["discover-section"]}>
            <div className={styles.left}>
              <h1>Discover digital art & Collect NFTs</h1>
              <p className={styles["main-text"]}>
                NFT marketplace UI created with Anima for Figma. Collect, buy
                and sell art from more than 20k NFT artists.
              </p>
              <Button
                className={styles["get-started-button"]}
                variant="secondary"
                icon={<i className="icon-rocket-launch" />}
              >
                Get Started
              </Button>
              <section className={styles["additinal-info"]}>
                <AdditionalInfoItem
                  className={styles["additinal-info-item"]}
                  value="240k+"
                  title="Total Sale"
                />
                <AdditionalInfoItem
                  className={styles["additinal-info-item"]}
                  value="100k+"
                  title="Auctions"
                />
                <AdditionalInfoItem
                  className={styles["additinal-info-item"]}
                  value="240k+"
                  title="Artists"
                />
              </section>
            </div>
            <HighlightedNftCard />
          </article>
        </section>
        <section className={styles["trending-section"]}>
          <article>
            <SectionHeadline
              heading="Trending Collection"
              subhead="Checkout our weekly updated trending collection"
            />
            <div className={styles.collections}>
              {collectionData.map((collection) => (
                <CollectionCard
                  className={styles["collection-card-wrapper"]}
                  key={collection.id}
                  collectionData={collection}
                />
              ))}
            </div>
          </article>
        </section>
        <section>
          <SectionHeadline
            heading="Top Creators"
            subhead="Checkout Top Rated Creators on the NFT Marketplace"
            suffix={
              <Button
                className={styles["section-headline-button"]}
                variant="secondary"
                outlined
                icon={<i className="icon-rocket-launch" />}
              >
                View Rankings
              </Button>
            }
          />
          <article>
            <div className={styles["top-creators"]}>
              {topCreators.map((creator) => (
                <ArtistCard key={creator.id} artist={creator} />
              ))}
            </div>
          </article>
        </section>
        <section>
          <SectionHeadline heading="Browse Categories" />
          <article className={styles.categories}>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                className={styles.category}
                category={category}
              />
            ))}
          </article>
        </section>
        <section>
          <SectionHeadline
            heading="Discover More NFTs"
            subhead="Explore New Trending NFTS"
            suffix={
              <Button
                className={styles["section-headline-button"]}
                variant="secondary"
                outlined
                icon={<i className="icon-eye" />}
              >
                See All
              </Button>
            }
          />
          <article className={styles["more-nfts"]}>
            {nfts.map((nft) => (
              <NftCard className={styles.nft} key={nft.id} nft={nft} />
            ))}
          </article>
        </section>
        <section className={styles["nft-highlight-section"]}>
          <article>
            <div className={styles["artist-and-button"]}>
              <ArtistCommonCard artist={topCreators[6]} withBackground />
              <h2>Magic Mushrooms</h2>
              <Button
                className={styles["see-nft-button"]}
                variant="secondary"
                icon={<i className="icon-eye" />}
              >
                See NFT
              </Button>
            </div>
            <div>
              <Timer auctionTime={new Date("2023-01-3")} />
            </div>
          </article>
        </section>
        <section></section>
      </main>
    </>
  );
};

export default HomeView;
