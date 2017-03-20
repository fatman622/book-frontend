import React, {Component, PropTypes} from 'react';
import {reduxForm, Field, SubmissionError} from 'redux-form';
import {createBook, getBooks} from '../actions/index';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';


const renderInput = field => (
	<div>
		<TextField hintText={"Enter " + field.input.name} errorText={field.error}>
			<input type={field.type} {...field.input} />
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

class NewBook extends Component{
	static contextTypes = {
		router: PropTypes.object
	}

	onSubmit(data){
		if(data.available !== true){
			data.available = false
		}
		const {createBook, reset} = this.props;
		return createBook(data).then(() => {
			if (data.autor == null) {
	      throw new SubmissionError({ autor: 'This field is required'})
	    } 
			if (data.text == null) {
	      throw new SubmissionError({ text: 'This field is required'})
	    } 
	    if (data.pages == null) {
	      throw new SubmissionError({ pages: 'This field is required'})
	    } 
			this.props.getBooks();
			reset()

		});
	 
	}

	render(){
		const {handleSubmit} = this.props;
		return(
			<div className="newBook">
				<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="autor" component={renderInput} type="text" />                     
          <Field name="text" component={renderInput} type="text" /> 
          <Field name="pages" component={renderInput} type="number" />
          <Field name="available" component={renderCheckbox} label="Available" />                
        	<FlatButton label="Save" primary={true} type="submit"/>
	      </form>
			</div>
		);
	}
}


export default connect(null, {createBook, getBooks: getBooks})(reduxForm({ form: 'NewBook' })(NewBook));