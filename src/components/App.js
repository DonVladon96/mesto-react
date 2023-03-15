import React from "react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpe] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);

  ОСТАНОВИЛСЯ Тутъ

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="author" content="Петров Владислав" />
      <meta name="Title" content="Mesto" />
      <meta name="Translate" content="Место" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Mesto</title>
      <body class="body-container">
      <div className="main-page">
        <Header/>
        <Main/>
        <Footer/>
        
        {/* Создаю попап для профиля*/}
        <div className="popup popup_edit-profile" id="popup-profile">
          <div className="popup__container">
            <button type="button" className="popup__close" />
            <form className="popup__form" id="popup-form" noValidate="">
              <h2 className="popup__title">Редактировать профиль</h2>
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
              <button
                type="submit"
                className="popup__submit-button popup__submit-button_valid"
                id="submit-button-profile"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        {/* Попап для удаления карточек */}
        <div className="popup popup_delelte-card" id="popup_delelte-card">
          <div className="popup__container">
            <button type="button" className="popup__close" />
            <form className="popup__form" id="popup-delete-card" noValidate="">
              <h2 className="popup__title">Вы уверены?</h2>
              <button
                type="submit"
                className="popup__submit-button popup__submit-button_valid"
                id="delete-submit-button"
              >
                да
              </button>
            </form>
          </div>
        </div>
        {/* Попап для обновления аватара */}
        <div className="popup popup_edit_avatar">
          <div className="popup__container">
            <button type="button" className="popup__close" />
            <form className="popup__form" id="popup-avatar" noValidate="">
              <h2 className="popup__title">Обновить аватар</h2>
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
              <button
                type="submit"
                className="popup__submit-button popup__submit-button_valid"
                id="submit-button-avatar"
              >
                Сохранить
              </button>
            </form>
          </div>
        </div>
        {/* Создаю попап для карточек*/}
        <div className="popup popup_edit-profile popup-cards" id="popup-cards">
          <div className="popup__container">
            <button type="button" className="popup__close" />
            <form className="popup__form" id="popup-form-card" noValidate="">
              <h2 className="popup__title">Новое место</h2>
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
              <button
                type="submit"
                className="popup__submit-button popup__submit-button_valid"
                id="submit-button-card"
              >
                Создать
              </button>
            </form>
            {/* class="popup__submit-button popup__" */}
          </div>
        </div>
       
      </div>
      </body>
      <template id="card-item-template" />
     
    </>
  );
}

export default App;
