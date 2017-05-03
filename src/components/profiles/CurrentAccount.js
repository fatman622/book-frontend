import React, { Component } from 'react';
import {connect} from 'react-redux';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router'
import { getProfile, updateProfile } from '../../actions/index';
import {reduxForm, Field} from 'redux-form';

// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

const renderInput = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

class CurrentAccount extends Component{
	componentWillMount() {
		if (!cookie.load('headersCookie')) {
			browserHistory.push('/login');
		}else {
			this.props.getProfile(this.props.params.id)
		}
	}

	onSubmit(data){
		const { updateProfile } = this.props;
		var id = this.props.params.id;
		console.log("Data..",data)
		return updateProfile(id, data).then((request) => {
			console.log("Request...",request)
		});
	 
	}

	render(){
		if(!this.props.profile){
			return <div> No profile for show </div>;
		}
		console.log(this.props.profile)
		const {handleSubmit} = this.props;
		return(
			<div>
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
					<div>
	          <Field 
	          	name="first_name" 
	          	component={renderInput} 
	          	type="text"
	          	label="First Name"

	          />
          </div>
          <div>                     
	          <Field 
	          	name="last_name" 
	          	component={renderInput} 
	          	type="text"
	          	label="Last Name"
	          />
          </div>              
        	<FlatButton 
        		label="Update" 
        		primary={true} 
        		type="submit"
        	/>
	      </form>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { profile: state.profiles.profile};
}

export default connect(mapStateToProps, {getProfile: getProfile, updateProfile: updateProfile})(reduxForm({ form: 'UpdateCurrentAccount' })(CurrentAccount));