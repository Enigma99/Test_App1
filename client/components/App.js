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
import BookList from './BookList'
class App extends React.Component {
  state = { answer: 42};
  render (){
    return (
      <BookList />
    );
  }
}

export default App;
