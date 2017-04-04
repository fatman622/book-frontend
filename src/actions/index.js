import {GET_BOOKS, GET_BOOK, CREATE_BOOK, DELETE_BOOK, GET_BOOKS_ELASTIC} from './types';
import axios from 'axios';

// const API_URL = "http://localhost:3000/api/v1" ;
const API_URL = "https://book-api-fatman622.herokuapp.com/api/v1" ;

export function getBooksElastic(props){
	const request = axios.get(`${API_URL}/books/search`, props); 

	return {
		type: GET_BOOKS_ELASTIC,
		payload: request
	};
}

export function getBooks(props){
	const request = axios.get(`${API_URL}/books`, props); 

	return {
		type: GET_BOOKS,
		payload: request
	};
}

export function createBook(props){
	const request = axios.post(`${API_URL}/books`, props); 

	return {
		type: CREATE_BOOK,
		payload: request
	};
}

export function deleteBook(id){
	const request = axios.delete(`${API_URL}/books/${id}`); 
	
	return {
		type: DELETE_BOOK,
		payload: request
	};
}

export function getBook(id){
	const request = axios.get(`${API_URL}/books/${id}`); 
	return {
		type: GET_BOOK,
		payload: request
	};
}