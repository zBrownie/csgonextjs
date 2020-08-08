import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CSGO Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo <a href="https://www.hltv.org/">CSGO Info</a>
        </h1>

        <p className={styles.description}>
          Todos informações obitidas de
          <code className={styles.code}>HLTV.org</code>
        </p>

        <div className={styles.grid}>
          <a href="/matchs" className={styles.card}>
            <h3>Partidas &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="/events" className={styles.card}>
            <h3>Eventos &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/zBrownie"
          target="_blank"
          rel="noopener noreferrer"
        >
          Feito por Bruno Zenerato
        </a>
      </footer>
    </div>
  );
}
