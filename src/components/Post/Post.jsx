import Image from "next/image";
import { Avatar } from "@material-ui/core";
import ThumbUpOffAltIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import me from "../../assets/images/me.png";
import InputOption from "../InputOption/InputOption";
import styles from "./index.module.scss";

export default function Post({ name, description, message, photoUrl }) {
	return (
		<div className={styles.post}>
			<div className={styles.post__header}>
				<Avatar style={{ width: "68px", height: "68px" }}>
					<Image src={me} width={68} height={68} />
				</Avatar>
				<div className={styles.post__info}>
					<h2 className={styles.name}>{name}</h2>
					<p className={styles.description}>{description}</p>
				</div>
			</div>
			<div className={styles.post__body}>
				<p>{message}</p>
			</div>

			<div className={styles.post__buttons}>
				<InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
				<InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
				<InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
				<InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
			</div>
		</div>
	);
}
