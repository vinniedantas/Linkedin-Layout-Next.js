import styles from "./index.module.scss";

export default function LoginForm() {
	return (
		<div className={styles.login}>
			<form className={styles.form__container}>
				<input placeholder="Full name" type="text" />
				<input placeholder="Email" type="email" />
				<input placeholder="Password" type="password" />
				<button type="submit">Sign In</button>
			</form>
			<p className={styles.register}>
				Not a member?
				<span className={styles.login__register}>Register now</span>
			</p>
		</div>
	);
}
