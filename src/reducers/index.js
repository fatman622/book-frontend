import {combineReducers} from 'redux';
import BooksReducer from './books_reducer';
import {reducer as formReducer} from 'redux-form';

const allReducers = combineReducers({
	books: BooksReducer,
	form: formReducer
});

export default allReducers
