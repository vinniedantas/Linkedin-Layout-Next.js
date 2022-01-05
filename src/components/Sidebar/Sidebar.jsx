import styles from "./index.module.scss";
import Image from "next/image";
import background from "../../assets/images/background.jpeg";
import { Avatar } from "@material-ui/core";
import me from "../../assets/images/me.png";

export default function Sidebar() {
	const recentItem = (topic) => (
		<div className={styles.sidebar__recent__item}>
			<span className={styles.sidebar__hash}>#</span>
			<p>{topic}</p>
		</div>
	);

	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebar__top}>
				<div className={styles.background__image}>
					<Image
						className={styles.sidebar__image}
						src={background}
						width={324}
						height={74}
					/>
				</div>
				<Avatar style={{ width: "68px", height: "68px" }}>
					<Image src={me} width={68} height={68} />
				</Avatar>
				<h2 className={styles.name}>Vinícius Dantas</h2>
				<h4 className={styles.title}>
					Full Stack Developer Node.Js | React.Js
				</h4>
			</div>
			<div className={styles.sidebar__stats}>
				<div className={styles.sidebar__stat}>
					<p className={styles.stat__text}>Who viewed your profile</p>
					<p className={styles.stat__number}>156</p>
				</div>
				<div className={styles.sidebar__stat}>
					<p className={styles.stat__text}>Views on posts</p>
					<p className={styles.stat__number}>156</p>
				</div>
			</div>
			<div className={styles.sidebar__bottom}>
				<p className={styles.sidebar__bottom__text}>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("software engineering")}
				{recentItem("testing")}
				{recentItem("deploy")}
			</div>
		</div>
	);
}
