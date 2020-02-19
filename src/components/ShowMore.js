import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from './styles/Button';

const ShowMoreStyled = styled.div`
  flex: 1 1 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
`;

class ShowMore extends Component {
	render() {
		return (
			<ShowMoreStyled>
				<Button
					onClick={() => {
						this.props.dispatch({
							type: 'SHOW_MORE',
							dataPointer: (this.props.filter.dataPointer || this.props.filter.dataOffcut) + this.props.filter.dataOffcut
						})
					}}
				>
					Show More
				</Button>
			</ShowMoreStyled>
		);
	}
}

export default connect(
	state => ({
		filter: state.filter,
	})
)(ShowMore);