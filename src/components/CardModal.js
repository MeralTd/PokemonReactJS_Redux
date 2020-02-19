import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './styles/Modal';

const CardModal = React.memo((props, context) => {

	const { showModal, openedModal } = props;

	const outsideClick = (e) => {
		const content = document.querySelector('.modal-content');
		if(!content.contains(e.target)) {
			showModal(false);
		}
	};

	const ModalElement = (
		<Modal onClick={outsideClick}>
			<div className="modal-content">
				<button className="close-button" onClick={() => showModal(false)}>
					&times;
				</button>

				<h1>{openedModal.item.name}</h1>
				<a>{openedModal.item.supertype}</a>
				<a>{openedModal.item.evolvesFrom}</a>
				<a>{openedModal.item.hp}</a>
				<a>{openedModal.item.rarity}</a>
				
				
			</div>
		</Modal>
	);

	return (
		ReactDOM.createPortal(
			ModalElement,
			document.body
		)
	);
});

export default CardModal;