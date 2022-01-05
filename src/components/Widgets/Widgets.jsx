import styles from "./index.module.scss";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

export default function Widgets() {
	return (
		<div className={styles.widgets}>
			<div className={styles.widgets__header}>
				<h2>Linkedin News</h2>
				<InfoOutlinedIcon />
			</div>
		</div>
	);
}
