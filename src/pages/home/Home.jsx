import styles from './Home.module.scss';

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <h2>Hola, mi nombre es</h2>
          <h1>Mario Ponce</h1>
        </div>
        <div className={styles.introRight}></div>
      </div>
    </div>
  );
}

export default Home;
