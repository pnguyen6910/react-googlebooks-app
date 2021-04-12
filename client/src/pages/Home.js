import React, { Component } from 'react'
import Col1 from "../components/Col1/Col1";
import Nav from "../components/Nav/Nav";
import Container from "../components/Container/Container";
import API from '../utils/API';
import SavedList from "../components/SavedList/SavedList";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

            savedBooks: []
        }
    }
    componentDidMount() {
        this.getBooks()
    }

    deleteGoogleBook(currentBook) {
        API.deleteBook(currentBook.id)
            .then(res => {
                console.log("You deleted this book:", res);
                this.getBooks();
            })
            .catch(err => {
                console.log("This is the error", err);
            })
    }

    getBooks() {
        API.getBooks()
            .then(res => {
                this.setState({
                    savedBooks: res.data
                })
                console.log("This is the res from getBooks", res);
            })
            .catch(err => {
                console.log("This is the error", err);
            })
    }


    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Container />
                    {this.state.savedBooks.length ? (
                        <SavedList
                            bookState={this.state.savedBooks}
                            deleteGoogleBook={this.deleteGoogleBook}
                        >
                        </SavedList>
                    ) : (
                        <h5>No results to display</h5>
                    )}
                </Container>
            </div>
        )
    }
}

export default Home;