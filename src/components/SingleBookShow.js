import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBook, deleteBook} from '../actions/index';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class SingleBookShow extends Component{

	componentWillMount() {
		this.props.getBook(this.props.params.id);
	}

	deleteButtonClick(){
		this.props.deleteBook(this.props.params.id)
			.then(() => {
				this.context.router.push('/');
			});
	}

	render(){
		const styles = {
		DeleteBook: {
			position: 'relative',
		  },
		};

		if(!this.props.book){
			return <div> No book for show </div>;
		}

		return(
			<div>
			 	<Card>
			    <CardHeader
			      title={"Author: " + this.props.book.author}
			    />
				    <CardText>
				     	{this.props.book.text}
				    </CardText>
		      	<CardActions>
			      	<FlatButton 
			      		secondary={true} 
		      			label="Delete" 
		      			onClick={this.deleteButtonClick.bind(this)} 
		      			style={styles.DeleteBook}/>
			    	</CardActions>
			  </Card>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { book: state.books.book};
}

export default connect(mapStateToProps, {getBook, deleteBook})(SingleBookShow);