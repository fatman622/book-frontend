import {GET_BOOKS, GET_BOOK, CREATE_BOOK, DELETE_BOOK, GET_BOOKS_ELASTIC, SIGN_IN, SIGN_OUT} from './types';
import axios from 'axios';
import cookie from 'react-cookie';

// const API_URL = "http://localhost:3000/api/v1" ;
const API_URL = "https://book-api-fatman622.herokuapp.com/api/v1" ;
if(cookie.load('headersCookie')){
	axios.defaults.headers = cookie.load('headersCookie');
}

// Books functions
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

export function signIn(props){
	const request = axios.post(`${API_URL}/auth/sign_in`, props); 
	return {
		type: SIGN_IN,
		payload: request
	};

}

export function signOut(props){
	const request = axios.delete(`${API_URL}/auth/sign_out`, props); 
	return {
		type: SIGN_OUT,
		payload: request
	};

}