import React from 'react';
import styled from 'styled-components';

const ErrorStyled = styled.div`
	text-align: center;
`;

const DisplayError = ({message}) => (
	<ErrorStyled>
		{message}
	</ErrorStyled>
);

export default DisplayError;