import styles from "./index.module.scss";
import HeaderOptions from "../HeaderOptions/HeaderOptions";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import logo from "../../assets/images/logo.png";
import me from "../../assets/images/me.png";
import Image from "next/image";

export default function Header() {
	return (
		<>
			<div className={styles.header_container}>
				<div className={styles.header_left}>
					<div className={styles.image__header}>
						<Image
							src={logo}
							object-fit="contain"
							width="40px"
							height="40px"
							alt="linkedinlogo"
						/>
					</div>
					<div className={styles.header_search}>
						<SearchIcon />
						<input placeholder="Search" type="text" />
					</div>
				</div>
				<div className={styles.header_right}>
					<HeaderOptions Icon={HomeIcon} title="Home" />
					<HeaderOptions Icon={SupervisorAccountIcon} title="MyNetwork" />
					<HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
					<HeaderOptions Icon={ChatIcon} title="Messaging" />
					<HeaderOptions Icon={NotificationsIcon} title="Notifications" />
					<HeaderOptions avatar="me" alt="avatar" title="Me" />
				</div>
			</div>
		</>
	);
}
