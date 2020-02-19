import styled, { keyframes } from 'styled-components';

const scaleout = keyframes`
	0% { 
		transform: scale(0.0); 
	} 
	100% { 
		transform: scale(1.0); 
		opacity: 0;
  }
`;

const Spinner = styled.div`
	margin: 0 auto; 
	width: 80px; 
	height: 80px;
	background-color: #00d1b2; 
	border-radius: 50%;
	
	animation: ${scaleout} 1.0s infinite ease-in-out;
`;

export default Spinner;