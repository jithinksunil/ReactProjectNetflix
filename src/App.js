import './App.css';
import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost';
import { originals,horrorMovies,comedyMovies,actionMovies } from './urls'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals' />
    <RowPost url={horrorMovies} title='Horror Movies' isSmall />
    <RowPost url={comedyMovies} title='Comedy Movies' isSmall />
    <RowPost url={actionMovies} title='Action Movies' isSmall />
   </div>
  );
}

export default App;
