import React, {Component} from 'react';
import cookie from 'react-cookie';
import SignOut from './auth/SignOut';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../App.css';

class App extends Component{

	render(){
		var result= null;
		if(cookie.load('headersCookie')){
				result = <div>
					<SignOut />
					{this.props.children}
			  </div>
		} else {
				result = <div>
					{this.props.children}
			  </div>
		}
		return(
			<MuiThemeProvider>
				{result}
			</MuiThemeProvider>
		)
	}
}
	

export default App;
