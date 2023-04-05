import api from '../utils/Api'
import Card from './Card'

function Main(props) {
	const [userAvatar, setUserAvatar] = useState('')
	const [userName, setUserName] = useState('')
	const [userAbout, setUserAbout] = useState('')

	const [isCards, setCard] = useState([]) //описать кардс.жс


	return (<main className='main-content'>
		<section className='profile section section_size_narrow'>
			<div
				className='profile__avatar-container'
				onClick={props.openUserAvatar}
			>
				<img src={userAvatar} alt='Аватар' className='profile__avatar' />
			</div>
			<div className='profile__info'>
				<div className='profile__name-content'>
					<h1 className='profile__name'>{userName}</h1>
					<button
						type='button'
						aria-label='Редактировать профиль'
						className='profile__edit'
						onClick={props.openProfileEdit}
					/>
				</div>
				<p className='profile__aboute'>{userAbout}</p>
			</div>
			<button
				type='button'
				aria-label='Добавить новую картинку'
				className='profile__add-button'
				onClick={props.addButtonCard}
			/>
		</section>
		{/* создать кард.жс */}
		<section className='elements'>
			{isCards.map((card) => (<Card
				key={card._id}
				card={card}
				openCard={props.openCard}
				deleteCard={props.openDeleteConfirm}
			/>))}
		</section>
	</main>)
}

export default Main
