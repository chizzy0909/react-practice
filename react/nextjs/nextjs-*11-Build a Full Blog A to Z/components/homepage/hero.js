import Image from "next/image";

import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/max.jpg"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm XINYUNLAI</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Angular or React.
      </p>
    </section>
  );
}
