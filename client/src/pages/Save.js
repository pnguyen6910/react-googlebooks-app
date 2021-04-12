import React, { Component } from "react";
import Col1 from "../components/Col1/Col1";
import Nav from "../components/Nav/Nav";
import Container from "../components/Container/Container";
import { Input, SubmitBtn } from "../components/Search/Search";
import API from "../utils/API";
import ResultList from "../components/ResultList/ResultList";

class Save extends Component {

    state = {
        books: [],
        search: ""
    };

    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("This is res.data", res.data.items)
                this.setState({
                    books: res.data.items,
                    search: ""
                })
            })
            .catch(err => console.log(err));

    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = e => {
        e.preDefault();
        this.searchBooks();
    };

    saveGoogleBook = currentBook => {
        console.log("This is the current book", currentBook);
        API.saveBook({
            id: currentBook.id,
            title: currentBook.title,
            authors: currentBook.authors,
            description: currentBook.description,
            image: currentBook.image,
            link: currentBook.link
        })
            .then(res => console.log("Successful POST to DB!", res))
            .catch(err => console.log("this is the error", err));
    }

    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Container />
                    <form>
                        <h5>Search for books</h5>
                        <Input
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            name="search"
                            placeholder="e.g. Harry Potter"
                        />
                        <SubmitBtn onClick={this.handleFormSubmit} />
                    </form>

                    {this.state.books.length ? (
                        <ResultList
                            bookState={this.state.books}
                            saveGoogleBook={this.saveGoogleBook}>
                        </ResultList>
                    ) : (
                        <div>
                            <hr />
                            <p style={{ fontStyle: "italic" }}>Noting to display</p>
                        </div>
                    )}

                </Container>
            </div>
        )
    }
}

export default Save;