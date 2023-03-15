import React from "react";

function ImagePopup() {
  return (
    <div className="popup popup_image-open" id="popup-image">
      <div className="popup__container popup__container_image">
        <button type="button" className="popup__close popup__close-image" />
        <div className="popup__wrapper">
          <img className="popup__image" alt="картинка-карточка" />
          <p className="popup__caption" />
        </div>
      </div>
    </div>
  );
}

export default ImagePopup;
