import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
	const currentUser = useContext(CurrentUserContext);

	const [avatar, setAvatar] = useState(currentUser.avatar);

	useEffect(() => {
		setAvatar(currentUser.avatar);
		setAvatar('');
	}, [props.isOpen]);

	function useSubmit(e) {
		e.preventDefault();

		props.goSubmit({ avatar });

		setAvatar('');
	}

	function useChanglerAvatar(e) {
		setAvatar(e.target.value);
	}

	return (
		<PopupWithForm
			name='avatar'
			title='Обновить аватар'
			buttonText='Сохранить'
			isOpen={props.isOpen}
			isClosed={props.isClosed}
			goSubmit={useSubmit}
		>
			<input
				type='url'
				name='avatar'
				placeholder='Ссылка на картинку'
				className='popup__input popup__input_avatar-link'
				id='avatar-link'
				required=''
				onChange={useChanglerAvatar}
				value={avatar || ''}
			/>
			<span className='avatar-link-error popup__input-error'>
				вы пропустили поле.
			</span>
		</PopupWithForm>
	);
}

export default EditAvatarPopup;
