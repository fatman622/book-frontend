import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import { signOut } from '../actions/index';
import cookie from 'react-cookie';
// import { push } from 'react-router-redux';
import { browserHistory } from 'react-router'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import '../App.css';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class App extends Component{
	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount() {
		if (!cookie.load('headersCookie')) {
			// history.pushState(null,'/login');
			browserHistory.push('/login');
		}
	}

	signOutUser(){
		const { signOut } = this.props;
		signOut()
		.then((q) => {
			cookie.remove('headersCookie', { path: '/' });
			// history.pushState(null, '/login')
			browserHistory.push('/login');
		});
	}
	render(){
		return(
			<MuiThemeProvider>
				<div>
					<AppBar
				    title={	<span style={styles.title}> Books App </span> }
				    iconElementRight={ <FlatButton secondary={true} onTouchTap={this.signOutUser.bind(this)} label="Sign Out"/> }
				  />
					{this.props.children}
			  </div>
			</MuiThemeProvider>
		)
	}
}
	

export default connect(null, {signOut: signOut})(App);
