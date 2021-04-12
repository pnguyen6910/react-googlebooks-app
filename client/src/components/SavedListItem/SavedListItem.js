import React, { Component } from 'react';
import SavedList from "../SavedList/SavedList";

class SavedList extends Component {


    render() {
        console.log("Props", this.props.bookState)
        return (
            this.props.bookState.map((book) => (
                <SavedList
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    link={book.link}
                    authors={book.authors && book.authors.length > 1 ? book.authors.join(", ") : book.authors}
                    image={book.image ? book.image : "https://previews.123rf.com/images/pavelstasevich/pavelstasevich1811/pavelstasevich181101065/112815953-no-image-available-icon-flat-vector.jpg"}
                    description={book.description}
                    deleteGoogleBook={this.props.deleteGoogleBook}
                />
            ))
        )

    }
}

export default SavedList;