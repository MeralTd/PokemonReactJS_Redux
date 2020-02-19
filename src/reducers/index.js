import { combineReducers } from 'redux';

// Fetched data
const data = (state = [], action) => {
	switch(action.type) {
		case 'STORE_DATA':
			return action.data;
		default:
			return state;
	}
};

const isLoading = (state = false, action) => {
	switch(action.type) {
		case 'LOADING_DATA':
			return action.status;
		default:
			return state;
	}
};

const openedModal = (state = { status: false, item: null }, action) => {
	switch(action.type) {
		case 'SHOW_MODAL':
			return {
				status: action.status,
				item: action.item
			};
		default:
			return state;
	}
}

const errorMessage = (state = null, action) => {
	switch(action.type) {
		case 'NEW_ERROR_MESSAGE':
			return action.message;
		case 'RESET_ERROR_MESSAGE':
			return null;
		default:
			return state;
	}
};

// Filtering and pagination
const defaultFilter = {
	setsSeries: '', 
	cardName: '',
	dataPointer: 0,
	dataOffcut: 6,
};

const filter = (
	state = defaultFilter, action) => {

	switch(action.type) {
		case 'DO_FILTER_SERIES':
			if(state.setsSeries === action.setsSeries) {
				return {...state, setsSeries: '', dataPointer: 0};
			}
			return {...state, setsSeries: action.setsSeries, dataPointer: 0};
		case 'DO_FILTER_NAME':
			return {...state, cardName: action.cardName, dataPointer: 0};
		case 'SHOW_MORE':
			return {...state, dataPointer: action.dataPointer};
		case 'RESET_FILTER':
			let dataOffcut;
			action.dataType === 'cards' ? dataOffcut = 8 : dataOffcut = defaultFilter.dataOffcut;
			return {...defaultFilter, dataOffcut};
		default:
			return state;
	}
};

const rootReducer = combineReducers({data,isLoading,errorMessage,filter,openedModal});

export default rootReducer;