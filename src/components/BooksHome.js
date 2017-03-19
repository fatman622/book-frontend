import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getBooks} from '../actions/index';
import {Link} from 'react-router';
import NewBook from './NewBook';
import {SHOW_ALL, SHOW_BY_NAME} from '../actions/types';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  customWidth: {
    width: 200,
  },
};

function uniq(a, param){
    return a.filter(function(item, pos, array){
        return array.map(function(mapItem){
        	return mapItem[param]; 
       	}).indexOf(item[param]) === pos;
    })
}

class BooksHome extends Component{
	componentWillMount(){
		this.props.getBooks();
	}

 	state = {
 		filter: SHOW_ALL,
 		filterValue: '',
 		value: 'ALL'
 	}

	handleChange = (filter, event, value, index ) => {
		if(value == 'ALL'){
			this.setState({ filterValue: '' })
			this.setState({ filter: SHOW_ALL })
		}else{
			this.setState({ filterValue: value })
			this.setState({ filter: SHOW_BY_NAME })
		}
		this.setState({ value })
		
	}

	renderBooks(){
		const BOOK_FILTER = {
			[SHOW_ALL]: () => true,
			[SHOW_BY_NAME]: book => book.autor === this.state.filterValue 
		}
		const {filter} = this.state;
		const filterBook = this.props.books.filter(BOOK_FILTER[filter])

		return filterBook.map((book) => {
			return (
				<TableRow key={book.id}>
			        <TableRowColumn>
			        	<Link to={"books/" + book.id}> {book.id} </Link>
			        </TableRowColumn>
			        <TableRowColumn>{book.autor}</TableRowColumn>
			        <TableRowColumn>{book.text}</TableRowColumn>
			        <TableRowColumn>{book.pages}</TableRowColumn>
			         <TableRowColumn>
			         <Checkbox
						      checked={book.available}
						      disabled={true}
						    />
			         
			         </TableRowColumn>
				</TableRow>
			)
		});
	}

	render(){
		return(
			<div>
				<NewBook />
				<DropDownMenu
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          style={styles.customWidth}
          autoWidth={false}
        >
       	 <MenuItem value={'ALL'} primaryText="Select autor" onTouchTap={this.handleChange.bind(this)}/>
         	{
         	 uniq(this.props.books, 'autor').map(book => 
         		<MenuItem key={book.id} value={book.autor} primaryText={book.autor} />
         	)}
        </DropDownMenu>
				<Table>
				    <TableHeader>
				      <TableRow>
				        <TableHeaderColumn>ID</TableHeaderColumn>
				        <TableHeaderColumn>Author</TableHeaderColumn>
				        <TableHeaderColumn>Text</TableHeaderColumn>
				        <TableHeaderColumn>Pages</TableHeaderColumn>
				        <TableHeaderColumn>Available</TableHeaderColumn>
				      </TableRow>
				    </TableHeader>
					 <TableBody>
						{this.renderBooks()}
					</TableBody>
  				</Table>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {books: state.books.all}
}

export default connect(mapStateToProps, {getBooks: getBooks })(BooksHome);