import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  //использую хуки, чтобы задать начальное состояние(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isConfirmDeletePopup, setConfirmDeletePopup] = React.useState(false);

  //описываю функции для всех изменений начального состояния
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  //функция закрытия всех попапов
  function closeAllPopups() {
    setCardOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setConfirmDeletePopup(false);
  }

  function handleConfirmDeletePopup() {
    setConfirmDeletePopup(true);
  }

  function handleOpenCardClick(cardsData) {
    setCardOpen(true);
    setSelectedCard(cardsData);
  }

  const [isCardOpen, setCardOpen] = React.useState(false);
  const [isSelectedCard, setSelectedCard] = React.useState({});

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="Петров Владислав" />
      <meta name="Title" content="Mesto" />
      <meta name="Translate" content="Место" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mesto</title>
      <body className="body-container">
        <div className="main-page">
          <Header />
          <Main
            openProfileEdit={handleEditProfileClick}
            addButtonCard={handleAddPlaceClick}
            openUserAvatar={handleEditAvatarClick}
            openDeleteConfirm={handleConfirmDeletePopup}
            openCard={handleOpenCardClick}
          />
          <Footer />
          <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            isClosed={closeAllPopups}
          >
            <input
              type="url"
              name="avatar"
              placeholder="Ссылка на картинку"
              className="popup__input popup__input_avatar-link"
              id="avatar-link"
              required=""
            />
            <span className="avatar-link-error popup__input-error">
              вы пропустили поле.
            </span>
          </PopupWithForm>

          {/* для редактирования профиля */}
          <PopupWithForm
            name="user"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            isClosed={closeAllPopups}
          >
            <input
              type="text"
              id="input-name"
              name="dataName"
              className="popup__input"
              placeholder="Как вас зовут?"
              minLength={2}
              maxLength={40}
              required=""
            />
            <span className="input-name-error popup__input-error">
              вы пропустили поле.
            </span>
            <input
              type="text"
              name="dataJob"
              placeholder="Чем вы занимаетесь?"
              className="popup__input"
              id="input-job"
              minLength={2}
              maxLength={200}
              required=""
            />
            <span className="input-job-error popup__input-error">
              вы пропустили поле.
            </span>
          </PopupWithForm>

          {/* для добавления карточек */}
          <PopupWithForm
            name="cardName"
            title="Новое место"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            isClosed={closeAllPopups}
          >
            <input
              type="text"
              name="cardName"
              placeholder="Название?"
              className="popup__input"
              id="card-name"
              minLength={2}
              maxLength={30}
              required=""
            />
            <span className="card-name-error popup__input-error">
              вы пропустили поле.
            </span>
            <input
              type="url"
              name="cardLink"
              placeholder="Ссылка на картинку"
              className="popup__input"
              id="card-link"
              required=""
            />
            <span className="card-link-error popup__input-error">
              вы пропустили поле.
            </span>
          </PopupWithForm>

          {/* для открытия картинки */}
          <ImagePopup
            card={isSelectedCard}
            isOpen={isCardOpen}
            isClosed={closeAllPopups}
          ></ImagePopup>

          {/* для подтверждения удаления  */}
          <PopupWithForm
            name="delete-card"
            title="Вы уверены?"
            buttonText="Да"
            isOpen={isConfirmDeletePopup}
            isClosed={closeAllPopups}
          ></PopupWithForm>
        </div>
      </body>
    </>
  );
}

export default App;
