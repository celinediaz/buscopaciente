import './App.css';
import Navb from './components/Navb';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import VerCitas from './components/VerCitas';
import AgendarCita from './components/AgendarCita';
import LandingPage from './components/LandingPage';
<<<<<<< Updated upstream
=======
import MenuUsuarios from './components/MenuUsuarios';
import MenuExperto from './components/MenuExperto';
import ExpRoute from './components/ExpRoute';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
          <Route path="/agendarcitas">
            < AgendarCita />
          </Route>
=======
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
>>>>>>> Stashed changes
        </Switch>
        </AuthProvider>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
