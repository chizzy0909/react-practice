import styles from "./event-list.module.css";
import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={styles.list}>
      {items.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}
export default EventList;
