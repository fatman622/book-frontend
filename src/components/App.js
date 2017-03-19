import React, {Component} from 'react';
require('../../scss/style.scss');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component{
	render(){
		return(
			<MuiThemeProvider>
				<div>
					{this.props.children}
			  </div>
			</MuiThemeProvider>
		)
	}
}
	

export default App;
