import type { NextPage } from 'next';
import Header from 'sections/Header';
import styles from 'styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<main className={styles.main}>
			<Header />
		</main>
	);
};

export default Home;
