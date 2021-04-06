import './App.css';
import Navb from './components/Navb';
import Footer from './components/Footer';
import Login from './components/Login';
import ListaExpedientes from './components/ListaExpedientes';
import ExpedienteIndividual from './components/ExpedienteIndividual';
import SignupPract from './components/SignupPract';
import Signup from './components/Signup';
import VerCitas from './components/VerCitas';
import AgendarCita from './components/AgendarCita';
import LandingPage from './components/LandingPage';
import MenuExperto from './components/MenuExperto';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from "./contexts/AuthContext";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
    <AuthProvider>
      <Navb />
        <Switch>
          <Route exact path="/">
            < LandingPage />
          </Route>
          <Route path="/signup">
            < Signup />
          </Route>
          <Route path="/signuppract">
            < SignupPract />
          </Route>
          <Route path="/login">
            < Login />
          </Route>
          <Route path="/vercitas">
            < VerCitas />
          </Route>
          <Route path="/agendarcitas">
            < AgendarCita />
          </Route>
          <Route path="/expedientes">
            < ListaExpedientes />
          </Route>
          <Route path="/expediente">
            < ExpedienteIndividual />
          </Route>
          <Route path="/experto">
            < MenuExperto />
          </Route>
        
        </Switch>
        </AuthProvider>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
