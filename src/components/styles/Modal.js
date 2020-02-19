import styled from 'styled-components';

const Modal = styled.div`
	position: fixed;
	top: 0;
	padding: 5rem;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.2);
	z-index: 999;
	display: flex;
	.modal-content {
		padding: 2rem;
		width: 100%;
		background: #fff;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		.close-button {
			align-self: flex-end;
			font-size:1rem;
			background: none;
			border: 1px solid #333;
			cursor: pointer;
		}
		h1 {
			align-self: center;
		}
		p {
			margin-bottom: 20px;
		}
	}
`;

export default Modal;