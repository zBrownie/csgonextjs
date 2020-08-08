import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import api from "../services/api";

function Events() {
  const [listEvents, setListEvents] = React.useState([]);
  const thisMonth = new Date().getMonth();
  React.useEffect(() => {
    api.get("/events/all").then((resp) => {
      let tempArr = [];
      resp?.data.map((event) => {
        if (event.month === thisMonth) {
          // * || event.month === thisMonth + 1
          event.events.map((eve) => {
            tempArr.push(eve);
          });
        }
      });
      setListEvents(tempArr);
    });
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>CSGO Info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Eventos futuros</h1>
        <p className={styles.description}>
          Todos informações obitidas de
          <code className={styles.code}>HLTV.org</code>
        </p>
        {listEvents.length === 0 ? (
          <div className={styles.grid}>Carregando...</div>
        ) : (
          <div className={styles.grid}>
            {listEvents.map((event, index) => {
              return (
                <a href="#" className={styles.card} key={index}>
                  <h3 className={styles.textWrap}>{event?.name} &rarr;</h3>
                  <p>{event?.prizePool}.</p>
                  <p>{event.location.name}.</p>
                </a>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}

export default Events;
