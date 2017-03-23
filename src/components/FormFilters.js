import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {getBooks} from '../actions/index';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

const renderInput = field => (
	<div>
		<TextField 
			hintText={"Enter " + field.input.name} 
		>
			<input 
				type={field.type} 
				{...field.input} 
			/>
		</TextField>
	</div>
)

const renderCheckbox = props => (
	<div>
	  <Checkbox 
		  label={props.label}
		  {...props.input}/>
	</div>
)

class FormFilters extends Component{
	
	formChange(data){
		// if(data.available !== true){
		// 	data.available = false
		// }
		if (data.author !== null){
			this.props.getBooks({ params: { author: data.author } });
		}
		if (data.available === true){
			this.props.getBooks({ params: { available: data.available } });
		}
		console.log("Params from form ", data);
	}

	render(){
		const {handleSubmit} = this.props;
		return(
			<form 
				// onKeyUp={handleSubmit(this.formChange.bind(this))}
				onSubmit={handleSubmit(this.formChange.bind(this))}>
			 <Field 
        	name="author" 
        	component={renderInput} 
        	type="text" 
        />
        <Field 
        	name="available" 
        	component={renderCheckbox} 
        	label="Available" 
        />  
        <FlatButton 
        		label="Filter" 
        		primary={true} 
        		type="submit"
        	/>     
      </form>    
		);
	}
}


export default connect(null, {getBooks: getBooks })(reduxForm({ form: 'FormFilters' })(FormFilters));