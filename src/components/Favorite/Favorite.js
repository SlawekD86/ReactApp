import React from 'react';
import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {

  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <div className={styles.favoritePage}>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        {favoriteCards.length > 0 ? (
          <ul className={styles.cards}>
            {favoriteCards.map((card) => (
              <Card key={card.id} title={card.title} id={card.id} isFavorite={card.isFavorite} />
            ))}
          </ul>
        ) : (
          <p className={styles.noFavorite}>No cards</p>
        )}
      </div>
    </div>
  );
};

export default Favorite;