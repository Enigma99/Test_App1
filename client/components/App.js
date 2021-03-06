//==========================
// Function component syntax
//==========================

// const App = () => {
//   return (
//       <h2>Hello components</h2>
//   );
// };
//
// export default App;


//==========================
// Class component syntax
//==========================
const React = require('react');
import BookList from './BookList';
import axios from 'axios';

class App extends React.Component {
  state = { books: []};
  componentDidMount() {
    // ajax
    axios.get('http://localhost:8080/api/books')
    .then(resp => {
      this.setState({books: resp.data});
    })
  }
  render (){
    return (
      <BookList books={this.state.books}/>
    );
  }
}

export default App;
