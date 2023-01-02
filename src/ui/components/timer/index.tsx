import { useEffect, useState } from "react";

import { Duration, intervalToDuration } from "date-fns";

import styles from "./styles.module.scss";
import { appendZero } from "src/core/utils";

interface Props {
  auctionTime: Date;
}

const Timer: React.FC<Props> = ({ auctionTime }) => {
  const [timeLeft, setTimeLeft] = useState<Duration | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(
        intervalToDuration({
          start: new Date(),
          end: auctionTime,
        })
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.timer}>
      <p className={styles["ends-in"]}>Auction ends in:</p>
      <div className={styles.clock}>
        <p className={styles.value}>{appendZero(timeLeft?.hours)}</p>
        <p className={styles.value}>:</p>
        <p className={styles.value}> {appendZero(timeLeft?.minutes)}</p>
        <p className={styles.value}>:</p>
        <p className={styles.value}>{appendZero(timeLeft?.seconds)}</p>

        <p className={styles.hours}>Hours</p>
        <p className={styles.minutes}>Minutes</p>
        <p className={styles.seconds}>Seconds</p>
      </div>
    </div>
  );
};

export default Timer;
