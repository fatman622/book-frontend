import {GET_BOOKS, GET_BOOK, CREATE_BOOK} from '../actions/types';

const INITIAL_STATE ={all: [], book: null};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case GET_BOOKS:
			return {...state, all: action.payload.data} ;
		case GET_BOOK:
			return {...state, book: action.payload.data} ;
		default:
			return state;
	}
}