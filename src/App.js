import './App.css';
import Navb from './components/Navb';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import VerCitas from './components/VerCitas';
import AgendarCita from './components/AgendarCita';
import LandingPage from './components/LandingPage';
import MenuUsuarios from './components/MenuUsuarios';
import MenuExperto from './components/MenuExperto';
import ExpRoute from './components/ExpRoute';
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
          <Route exact path="/" component = {LandingPage}/>
          <Route path="/signup" component ={Signup}/>
          <Route path="/signuppract" component ={SignupPract}/>
          <Route path="/login" component={Login}/>
          <ExpRoute path="/vercitas" component={VerCitas}/>
          <Route path="/agendarcitas" component={AgendarCita}/>
          <ExpRoute path="/expedientes" component={ListaExpedientes} />
          <Route path="/expediente" component = {ExpedienteIndividual} />
          <Route path="/usuario" component = {MenuUsuarios}/>
          <ExpRoute path="/experto" component={MenuExperto}/>
        </Switch>
        </AuthProvider>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
