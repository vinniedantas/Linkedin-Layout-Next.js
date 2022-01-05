import Header from "../Header/Header";
import styles from "./index.module.scss";

export default function Layout({ children }) {
	return (
		<>
			<Header />

			<div>{children}</div>
		</>
	);
}
