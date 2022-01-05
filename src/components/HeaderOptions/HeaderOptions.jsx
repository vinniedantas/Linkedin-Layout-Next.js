import styles from "./index.module.scss";
import { Avatar } from "@material-ui/core";
import Image from "next/image";
import me from "../../assets/images/me.png";

export default function HeaderOptions({ avatar, Icon, title }) {
	return (
		<>
			<div className={styles.header_option}>
				{Icon && <Icon className={styles.header_options_icon} />}
				{avatar && (
					<Avatar className={styles.header_options_avatar}>
						<Image src={me} width={68} height={68} />
					</Avatar>
				)}
				<h3 className={styles.header_option_title}>{title}</h3>
			</div>
		</>
	);
}
