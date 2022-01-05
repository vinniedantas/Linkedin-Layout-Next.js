import { useState, useEffect } from "react";
import styles from "./index.module.scss";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import me from "../../assets/images/me.png";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/Event";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import InputOption from "../InputOption/InputOption";
import Post from "../Post/Post";

export default function Feed() {
	return (
		<div className={styles.feed}>
			<div className={styles.feed__input__container}>
				<div className={styles.feed__input}>
					<CreateIcon />
					<form className={styles.feed__form}>
						<input className={styles.feed__input} type="text" />
						<button className={styles.submit__button} type="submit">
							Send
						</button>
					</form>
				</div>
				<div className={styles.feed__InputOptions}>
					<InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
					<InputOption Icon={SubscriptionIcon} title="Video" color="#E7A33E" />
					<InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
					<InputOption
						Icon={CalendarViewDayIcon}
						title="Write Article"
						color="#7FC15E"
					/>
				</div>
			</div>

			<Post
				name="Vinícius Dantas"
				description="This is a Test Description"
				message="This is a Test Message"
			/>
		</div>
	);
}
