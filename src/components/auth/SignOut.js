import React, {Component} from 'react';
import {connect} from 'react-redux';
import { signOut } from '../../actions/index';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router'

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

class SignOut extends Component{

	componentWillMount() {
		if (!cookie.load('headersCookie')) {
			browserHistory.push('/login');
		}
	}

	signOutUser(){
		const { signOut } = this.props;
		if (cookie.load('headersCookie')) {
			signOut().then((q) => {
				cookie.remove('headersCookie', { path: '/' });
				browserHistory.push('/login');
			});
		}
	}
	render(){
		return(
				<div>
					<AppBar
				    title={	<span style={styles.title}> Books App </span> }
				    iconElementRight={ <FlatButton secondary={true} onTouchTap={this.signOutUser.bind(this)} label="Sign Out"/> }
				  />
			  </div>
		)
	}
}
	

export default connect(null, {signOut: signOut})(SignOut);
