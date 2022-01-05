import styles from "./index.module.scss";

export default function InputOption({ Icon, title, color }) {
	return (
		<div className={styles.input__option}>
			<Icon style={{ color: color }} />
			<h4 className={styles.options__title}>{title}</h4>
		</div>
	);
}
