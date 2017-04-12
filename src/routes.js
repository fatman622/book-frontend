import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './components/App';
import BooksHome from './components/BooksHome';
import NewBook from './components/NewBook';
import SingleBookShow from './components/SingleBookShow';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={BooksHome} />
			<Route path="login" component={SignIn}/>
			<Route path="signup" component={SignUp}/>
			<Route path="books/new" component={NewBook} />
			<Route path="books/:id" component={SingleBookShow} />
		</Route>
	</Router>
)