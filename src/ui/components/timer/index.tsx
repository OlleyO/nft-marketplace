import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  auctionTime: Date;
}

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

const Timer: React.FC<Props> = ({ auctionTime }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setInterval(() => {}, 1000);
  }, []);

  return <div></div>;
};

export default Timer;
