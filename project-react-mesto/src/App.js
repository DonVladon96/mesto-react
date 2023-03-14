import './App.css';

function App() {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="author" content="Петров Владислав" />
    <meta name="Title" content="Mesto" />
    <meta name="Translate" content="Место" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mesto</title>
    <div className="main-page">
      <header className="header">
        <img
          src="<%=require('./images/logo.svg')%>"
          alt="Логотип"
          className="header__logo"
        />
      </header>
      <main className="main-content">
        <section className="profile section section_size_narrow">
          <div className="profile__avatar-container">
            {" "}
            <img
              src="<%=require('./images/Avatar.png')%>"
              alt="Аватар"
              className="profile__avatar"
            />
          </div>
          <div className="profile__info">
            <div className="profile__name-content">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <button
                type="button"
                aria-label="Редактировать профиль"
                className="profile__edit"
              />
            </div>
            <p className="profile__aboute">Исследователь океана</p>
          </div>
          <button type="button" className="profile__add-button" />
        </section>
        <section className="elements" />
      </main>
      <footer className="footer">
        <p className="footer__author">© 2022 Петров Владислав</p>
      </footer>
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
      {/* Создаю попап для открытия картинки*/}
      <div className="popup popup_image-open" id="popup-image">
        <div className="popup__container popup__container_image">
          <button type="button" className="popup__close popup__close-image" />
          <div className="popup__wrapper">
            <img className="popup__image" alt="картинка-карточка" />
            <p className="popup__caption" />
          </div>
        </div>
      </div>
    </div>
    <template id="card-item-template" />
    {/*
     */}
  </>
  
  );
}

export default App;
