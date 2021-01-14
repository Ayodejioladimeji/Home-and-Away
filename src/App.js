import './App.css';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
// import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/rooms" exact component={Rooms}/>
          <Route path="/rooms/:slug" exact component={SingleRoom}/>
          <Route  component={Error}/>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
