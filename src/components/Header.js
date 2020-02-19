import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import hero from '../img/hero.png';

const HeaderStyled = styled.header`
	padding: 3vmin 2rem;
	text-align: center;
	img {
		max-width: 100%;
	}
	a {
		&:hover	{
			opacity: .8;
		}
	}
`;

const Header = () => {
	return (
		<HeaderStyled>
			<Link to="/">
	      <img src={hero} alt="Pokemon" />
	     </Link>
    </HeaderStyled>
	)
};

export default React.memo(Header);