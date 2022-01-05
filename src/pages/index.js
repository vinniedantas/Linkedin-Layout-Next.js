import Head from "next/head";
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Widgets from "../components/Widgets/Widgets";
import styles from "../components/Layout/index.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>Linkedin Clone</title>
			</Head>
			<div className={styles.app__body}>
				<Sidebar />
				<Feed />
				<Widgets />
			</div>
		</>
	);
}
