import React, { useContext } from "react";
import { Card } from "../ui/Card";
import styles from "./MeetupItem.module.css";
import { FavoritesContext } from "../../store/favourites-context";

export const MeetupItem = (props) => {
  const { image, title, address, description } = props;

  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavorite() {
    console.log(favoritesCtx);

    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
      });
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavorite}>
            {itemIsFavorite ? "remove from favorites" : "add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};
