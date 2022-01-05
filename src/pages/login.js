import styles from "../components/Layout/index.module.scss";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
	return (
		<>
			<div className={styles.app__body}>
				<LoginForm />
			</div>
		</>
	);
}
