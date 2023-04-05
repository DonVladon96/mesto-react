import { useEffect, useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';


import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {
	//использую хуки, чтобы задать начальное состояние(false)
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
		useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [isConfirmDeletePopup, setConfirmDeletePopup] = useState(false);
	const [isCardOpen, setCardOpen] = useState(false);
	const [isSelectedCard, setSelectedCard] = useState({});

	// Создайте стейт currentUser в корневом компоненте
	const [currentUser, setCurrentUser] = useState('');


	const [cards, setCard] = useState([]);

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
			.then((data) => {
				const [userData, cardsData] = data;

				setCurrentUser(userData)

				setCard(cardsData)
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);


	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);

		api.
	}


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

	return (
		<>
			<div className='main-page'>
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
					name='avatar'
					title='Обновить аватар'
					buttonText='Сохранить'
					isOpen={isEditAvatarPopupOpen}
					isClosed={closeAllPopups}
				>
					<input
						type='url'
						name='avatar'
						placeholder='Ссылка на картинку'
						className='popup__input popup__input_avatar-link'
						id='avatar-link'
						required=''
					/>
					<span className='avatar-link-error popup__input-error'>
            вы пропустили поле.
          </span>
				</PopupWithForm>

				{/* для редактирования профиля */}
				<PopupWithForm
					name='user'
					title='Редактировать профиль'
					buttonText='Сохранить'
					isOpen={isEditProfilePopupOpen}
					isClosed={closeAllPopups}
				>
					<input
						type='text'
						id='input-name'
						name='dataName'
						className='popup__input'
						placeholder='Как вас зовут?'
						minLength={2}
						maxLength={40}
						required=''
					/>
					<span className='input-name-error popup__input-error'>
            вы пропустили поле.
          </span>
					<input
						type='text'
						name='dataJob'
						placeholder='Чем вы занимаетесь?'
						className='popup__input'
						id='input-job'
						minLength={2}
						maxLength={200}
						required=''
					/>
					<span className='input-job-error popup__input-error'>
            вы пропустили поле.
          </span>
				</PopupWithForm>

				{/* для добавления карточек */}
				<PopupWithForm
					name='cardName'
					title='Новое место'
					buttonText='Создать'
					isOpen={isAddPlacePopupOpen}
					isClosed={closeAllPopups}
				>
					<input
						type='text'
						name='cardName'
						placeholder='Название?'
						className='popup__input'
						id='card-name'
						minLength={2}
						maxLength={30}
						required=''
					/>
					<span className='card-name-error popup__input-error'>
            вы пропустили поле.
          </span>
					<input
						type='url'
						name='cardLink'
						placeholder='Ссылка на картинку'
						className='popup__input'
						id='card-link'
						required=''
					/>
					<span className='card-link-error popup__input-error'>
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
					name='delete-card'
					title='Вы уверены?'
					buttonText='Да'
					isOpen={isConfirmDeletePopup}
					isClosed={closeAllPopups}
				></PopupWithForm>
			</div>
		</>
	);
}

export default App;
