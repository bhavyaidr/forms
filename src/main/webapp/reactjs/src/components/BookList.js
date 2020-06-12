import React from "react";
import {Card,Table} from "react-bootstrap"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faList} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";


class BookList extends React.Component {
	constructor(props){
		super(props);
		this.state={
			books: []
		}
	}

	componentDidMount(){
this.findAllBooks();
	}

findAllBooks(){
	axios.get("http://localhost:8080/forms")
    		.then(response => response.data)
    		.then((data) => {
    			this.setState({books:data});
    		})}




	render(){
		return (
			<Card className={"border border-dark bg-dark text-white"}>
			<Card.Header><FontAwesomeIcon icon={faList} /> Registered Users</Card.Header>
			<Card.Body>
			<Table bordered hover striped variant="dark">
			<thead>
    <tr>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Password</th>
      <th>Email</th>

    </tr>
  </thead>
  <tbody>
  {
  this.state.books.length === 0  ?
    <tr align="center">
      <td colSpan="6">Registered Users .</td>

    </tr> :
    this.state.books.map((book) => (
    <tr key={book.id}>

    <td>{book.firstName}</td>
    <td>{book.lastName}</td>
    <td>{book.password}</td>
    <td>{book.email}</td>




    </tr>
)   )
}
  </tbody>
			</Table>
			</Card.Body>
			</Card>


			)
	}
}

export default BookList;