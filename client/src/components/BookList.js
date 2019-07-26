import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo'

const getBooksQuery = gql`
  {
    books{
      name
      id
    }
  }
`

class BookList extends React.Component {
  render() {
    return (
      <div>
        <ul id='book-list'>
          <li>Book List</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
// export default BookList
