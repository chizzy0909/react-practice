import React from "react";
import { MeetupItem } from "./MeetupItem";
import styles from "./MeetupList.module.css";

export const MeetupList = (props) => {
  return (
    <ul className={styles.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
};
