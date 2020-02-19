import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardItemStyled = styled.li`
	
	@media screen and (max-width: 600px) {
		.topnav .search-container {
		  float: none;
		}
		.topnav a, .topnav input[type=text], .topnav .search-container button {
		  float: none;
		  display: block;
		  text-align: left;
		  width: 100%;
		  margin: 0;
		  padding: 14px;
		}
		.topnav input[type=text] {
		  border: 1px solid #ccc;  
		}
	  }
	  
	  .table-wrapper {
		  background: #fff;
		  padding: 20px 25px;
		  margin: 90px 0;
		  border-radius: 3px;
		  box-shadow: 0 1px 1px rgba(0,0,0,.05);
	  }
	  
	  .table-title {
		  padding-bottom: 15px;
		  background: #435d7d;
		  color: #fff;
		  padding: 16px 40px;
		  margin: -20px 25px 10px;
		  border-radius: 5px 5px 0 0;
	  }
	  
		  .table-title h2 {
			  margin: 5px 0 0;
			  font-size: 20px;
		  }
	  
		  .table-title .btn-group {
			  float: right;
		  }
	  
		  .table-title .btn {
			  color: #fff;
			  float: right;
			  font-size: 13px;
			  border: none;
			  min-width: 50px;
			  border-radius: 2px;
			  border: none;
			  outline: none !important;
			  margin-left: 10px;
		  }
	  
			  .table-title .btn i {
				  float: left;
				  font-size: 21px;
				  margin-right: 5px;
			  }
	  
			  .table-title .btn span {
				  float: left;
				  margin-top: 2px;
			  }
	  
	  table.table tr th, table.table tr td {
		  border-color: #e9e9e9;
		  padding: 12px 40px;
		  vertical-align: middle;
	  }
	  
		  table.table tr th:first-child {
			  width: 60px;
		  }
	  
		  table.table tr th:last-child {
			  width: 100px;
		  }
	  
	  table.table-striped tbody tr:nth-of-type(odd) {
		  background-color: #fcfcfc;
	  }
	  
	  table.table-striped.table-hover tbody tr:hover {
		  background: #f5f5f5;
	  }
	  
	  table.table th i {
		  font-size: 13px;
		  margin: 0 5px;
		  cursor: pointer;
	  }
	  
	  table.table td:last-child i {
		  opacity: 0.9;
		  font-size: 22px;
		  margin: 0 5px;
	  }
	  
	  table.table td a {
		  font-weight: bold;
		  color: #566787;
		  display: inline-block;
		  text-decoration: none;
		  outline: none !important;
	  }
	  
		  table.table td a:hover {
			  color: #2196F3;
		  }
	  
		  table.table td a.edit {
			  color: #FFC107;
		  }
	  
		  table.table td a.delete {
			  color: #F44336;
		  }
	  
	  table.table td i {
		  font-size: 19px;
	  }
	  
	  table.table .avatar {
		  border-radius: 50%;
		  vertical-align: middle;
		  margin-right: 10px;
	  }
	  .button {
    display: inline-block;
    border-radius: 6px;
    background-color: #f4511e;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 1px;
    padding: 1px;
    width: 80px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 3px;
  }
`;

const CardItem = ({details, showModal}) => {
	return (
		<CardItemStyled >
			<table class="table table-striped table-hover">
				<tbody>
				<tr>
					<td>{details.name}</td>
					<td>{details.supertype}</td>
					<td>{details.evolvesFrom}</td>
					<td>{details.hp}</td>
					<td>{details.rarity}</td>
					<td>{details.imageUrl}</td>
					<Link to={`/cards/${details.id}`} onClick={e => e.preventDefault()}>
					<td><button onClick={() => showModal(true, details)} class = "button"><i>Detay</i></button></td>
					</Link>

                </tr>
				</tbody>
			</table>
		</CardItemStyled>
	);
};

export default CardItem;