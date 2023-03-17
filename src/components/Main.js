import React from "react";

import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userAbout, setUserAbout] = React.useState("");

  const [isCards, setCard] = React.useState([]);//описать кардс.жс

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then((data) => {
        const [userData, cardsData] = data;
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserAbout(userData.aboute);

        setCard(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main-content">
      <section className="profile section section_size_narrow">
        <div
          className="profile__avatar-container"
          onClick={props.openUserAvatar}
        >
          <img src={userAvatar} alt="Аватар" className="profile__avatar" />
        </div>
        <div className="profile__info">
          <div className="profile__name-content">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              aria-label="Редактировать профиль"
              className="profile__edit"
              onClick={props.openProfileEdit}
            />
          </div>
          <p className="profile__aboute">{userAbout}</p>
        </div>
        <button
          type="button"
          aria-label="Добавить новую картинку"
          className="profile__add-button"
          onClick={props.addButtonCard}
        />
      </section>
    {/* создать кард.жс */}
      <section className="elements">
    <article className="element">
    {isCards.map((card, ) =>
              <Card
                key={card._id}
                card={card}
                openCard={props.openCard}
                deleteCard={props.openDeleteConfirm}
              />
            )}
    </article>
      </section>
   
    </main>
  );
}

export default Main;
