import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import cookie from 'react-cookie';
import axios from 'axios';
// import { push } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { signIn } from '../../actions/index';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const renderInput = field => (
	<div>
		<TextField 
			hintText={"Enter " + field.input.name} 
			errorText={field.error}
		>
			<input 
				type={field.type} 
				{...field.input} 
			/>
		</TextField>
	</div>
)


class SignIn extends Component{
	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(data){
		const {signIn, reset} = this.props;

		signIn(data).then((request) => {

			cookie.save('headersCookie', request.payload.headers, { path: '/' });
			axios.defaults.headers = cookie.load('headersCookie');

			if (data.email == null) {
	      throw new SubmissionError({ email: 'This field is required'})
	    } 
			if (data.password == null) {
	      throw new SubmissionError({ password: 'This field is required'})
	    } 

	    reset()
	    browserHistory.push('/');
	    // history.pushState(null, '/')
		});
	 
	}

	render(){
		const {handleSubmit} = this.props;
		return(
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field 
          	name="email" 
          	component={renderInput} 
          	type="mail" 
          />                     
          <Field 
          	name="password" 
          	component={renderInput} 
          	type="password" 
          /> 
                
        	<FlatButton 
        		label="Login" 
        		primary={true} 
        		type="submit"
        	/>
	      </form>
			</div>
		);
	}
}


export default connect(null, {signIn: signIn})(reduxForm({ form: 'signIn' })(SignIn));
