import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Input from './styles/Input';
import { doFilterName } from '../actions';

const SearchWrapper = styled.div`
	margin-bottom: 2rem;
	padding: 0 20%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	label {
		flex: 1 1 auto;
	}
`;

class CardsSearch extends PureComponent {
	render() {
		return (
			<SearchWrapper>
				
				<label>
					<Input 
						placeholder="Search name" 
						onChange={(e) => this.props.doFilterName(e.target.value)}
					/>
				</label>
			</SearchWrapper>
		);
	}
}

export default connect(
	null,
	{
		doFilterName,
	}
)(CardsSearch);