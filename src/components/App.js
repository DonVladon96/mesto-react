import { useEffect, useState } from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditAvatarPopup from './EditAvatarPopup';
import PopupWithVerification from './PopupWithVerification';
import EditProfilePopup from './EditProfilePopup';

import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
	//использую хуки, чтобы задать начальное состояние(false)
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [isConfirmDeletePopup, setConfirmDeletePopup] = useState(false);
	const [isCardOpen, setCardOpen] = useState(false);
	const [isSelectedCard, setSelectedCard] = useState({});

	// Создайте стейт currentUser в корневом компоненте
	const [currentUser, setCurrentUser] = useState('');

	const [cards, setCard] = useState([]);

	const [currentCard, setCurrentCard] = useState('');

	useEffect(() => {
		Promise.all([api.getUserInfo(), api.getInitialCards()])
			.then((data) => {
				const [userData, cardsData] = data;

				setCurrentUser(userData);

				setCard(cardsData);
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	}, []);

	function handleUpdateUser({ name, about }) {
		api
			.parseUserInfo({ name, about })
			.then((response) => {
				setCurrentUser(response);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	}

	function handleCardLike(card) {
		const isLiked = card.likes.some((i) => i._id === currentUser._id);
		api
			.addLike(card._id, !isLiked)
			.then((newCard) => {
				setCard((state) =>
					state.map((c) => (c._id === card._id ? newCard : c))
				);
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	}

	function handleCardDelete(event) {
		event.preventDefault();

		api
			.deleteCard(currentCard._id)
			.then(() => {
				setCard(cards.filter((i) => i !== currentCard));
				closeAllPopups();
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
	}

	//описываю функции для всех изменений начального состояния
	function handleEditProfileClick() {
		setEditProfilePopupOpen(true);
	}

	function handleChangeAvatar({ avatar }) {
		api
			.updateUserAvatar({ avatar })
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups();
			})
			.catch((err) => {
				console.log(`Ошибка: ${err}`);
			});
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
		<CurrentUserContext.Provider value={currentUser}>
			<div className='main-page'>
				<Header />
				<Main
					openProfileEdit={handleEditProfileClick}
					addButtonCard={handleAddPlaceClick}
					openUserAvatar={handleEditAvatarClick}
					openDeleteConfirm={handleConfirmDeletePopup}
					openCard={handleOpenCardClick}
					cardLike={handleCardLike}
					cards={cards}
				/>
				<Footer />
				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					isClosed={closeAllPopups}
					onSubmit={handleChangeAvatar}
				/>
				{/* для редактирования профиля */}
				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					isClosed={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				></EditProfilePopup>
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
				<PopupWithVerification
					isOpen={isConfirmDeletePopup}
					isClosed={closeAllPopups}
					onSubmit={handleCardDelete}
				></PopupWithVerification>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
