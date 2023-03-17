import React from "react";

function Card({ card, openCard, deleteCard }) {
  function handleClickCard() {
    openCard(card);
  }

  return (
    <article className="element">
      <button
        type="button"
        aria-label="button-delete"
        className="element__button-trash"
        onClick={deleteCard}
      />
      <img
        src={card.link}
        alt={card.name}
        onClick={handleClickCard}
        className="element__photo"
      />
      <div className="element__photo-info">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__button-like" />
          <div className="element__like-number">{card.likes.length}</div>
        </div>
      </div>
    </article>
  );
}

export default Card;
