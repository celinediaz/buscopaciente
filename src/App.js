import './App.css';
import Navb from './components/Navb';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import VerCitas from './components/VerCitas';
import LandingPage from './components/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navb />
        <Switch>
          <Route exact path="/">
            < LandingPage />
          </Route>
          <Route path="/signup">
            < Signup />
          </Route>
          <Route path="/login">
            < Login />
          </Route>
          <Route path="/vercitas">
            < VerCitas />
          </Route>
        </Switch>

      <Footer />
    </div>
    </Router>
  );
}

export default App;
