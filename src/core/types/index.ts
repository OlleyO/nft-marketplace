export interface Artist {
  id: number;
  avatar: string;
  username: string;
  rank?: number;
  totalSales?: number;
}

export interface TrendingCollectionOverview {
  id: number;
  collectionName: string;
  artist: Artist;
  primaryNft: string;
  secondaryNft1: string;
  secondaryNft2: string;
  numberOfNfts: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Nft {
  id: number;
  name: string;
  artist: Artist;
  priceETH: number;
  highestBidwETH: number;
  image: string;
}
