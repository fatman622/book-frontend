import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import BooksHome from './components/BooksHome';
import NewBook from './components/NewBook';
import SingleBookShow from './components/SingleBookShow';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={BooksHome} />
		<Route path="books/new" component={NewBook} />
		<Route path="books/:id" component={SingleBookShow} />
	</Route>
)