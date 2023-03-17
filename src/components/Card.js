import React from "react";

function Card({ isCards, openCard, deleteCard }) {
  function handleClickCard() {
    openCard(card);
  }
  return (
    <article class="element">
      <button type="buttonTrash" class="element__button-trash"></button>
      <img alt="Карачаевск" class="element__photo" />
      <div class="element__photo-info">
        <h2 class="element__title"></h2>
        <div class="element__like-container">
          <button type="button" class="element__button-like"></button>
          <div class="element__like-number"></div>
        </div>
      </div>
    </article>
  );
}

export default Card;
