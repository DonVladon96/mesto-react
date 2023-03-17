import React from "react";

function Card({ card, openCard, deleteCard }) {
  function handleClickCard() {
    openCard(card);
  }
  return (
    <article className="element">
    <button
      type="buttonTrash"
      aria-label="button-delete"
      className="element__button-trash"
      onclick="{handleClickCard}"
    />
    <img
      src={card.link} alt={card.name} onClick={deleteCard} className="element__photo"
    />
    <div className="element__photo-info">
      <h2 className="element__title" />
      <div className="element__like-container">
        <button type="button" className="element__button-like" />
        <div className="element__like-number" />
      </div>
    </div>
  </article>
  
  );
}

export default Card;
//переделать в JSX
{/* <img src={card.link} alt={card.name} onClick={deleteCard} class="element__photo" /> */}