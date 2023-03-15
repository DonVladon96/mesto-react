import React from "react";

function Main(){


    return(
        <main className="main-content">
          <section className="profile section section_size_narrow">
            <div className="profile__avatar-container"
            onClick={() => {
            const handleEditAvatarClick = document.querySelector(".popup_edit_avatar")
            handleEditAvatarClick.classList.add('popup_opened');
            }}
            >
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
                onClick={() => {
                const handleEditProfileClick = document.querySelector(".popup_edit-profile");
                handleEditProfileClick.classList.add('popup_opened');
                }}
                />
              </div>
              <p className="profile__aboute">Исследователь океана</p>
            </div>
            <button type="button" className="profile__add-button" onClick={() => {
              const handleAddPlaceClick = document.querySelector(".popup-cards");
              handleAddPlaceClick.classList.add('popup_opened');
            }}/>
          </section>
          <section className="elements" />
        </main>
        )
};





export default Main;