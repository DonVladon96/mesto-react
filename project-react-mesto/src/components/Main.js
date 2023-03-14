import React from "react";

function Main(){


    return(
        <main className="main-content">
          <section className="profile section section_size_narrow">
            <div className="profile__avatar-container">
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
        )
};





export default Main;