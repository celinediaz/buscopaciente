import './App.css';
import Navb from './components/Navb';
import Footer from './components/Footer';
import Login from './components/Login';
import ListaExpedientes from './components/ListaExpedientes';
import ListaCitas from './components/ListaCitas';
import ExpedienteIndividual from './components/ExpedienteIndividual';
import SignupPract from './components/SignupPract';
import Signup from './components/Signup';
import VerCitas from './components/VerCitas';
import AgendarCita from './components/AgendarCita';
import LandingPage from './components/LandingPage';
import MenuUsuarios from './components/MenuUsuarios';
import PrivRoute from './components/PrivRoute';
import Menu from './components/Menu';
import Pagos from './components/Pagos';
import RegistroPaciente from './components/RegistroPaciente';
import EditarDatosPaciente from './components/EditarDatosPaciente';
import EditarDatosExperto from './components/EditarDatosExperto';
import Quienessomos from './components/Quienessomos';
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
          <Route path="/conocemas" component ={Quienessomos}/>
          <Route path="/signuppract" component ={SignupPract}/>
          <Route path="/login" component={Login}/>
          <PrivRoute path="/vercitas" component={VerCitas}/>
          <PrivRoute role="user" path="/agendarcitas" component={AgendarCita}/>
          <PrivRoute role="prac" path="/expedientes" component={ListaExpedientes} />
          <PrivRoute role="user" path="/listacitas" component={ListaCitas} />
          <PrivRoute role="user" path="/expediente" component = {ExpedienteIndividual} />
          <Route path="/registro" component = {MenuUsuarios}/>
          <PrivRoute path="/menu" component={Menu}/>
          <Route path="/pagos" component={Pagos}/>
          <Route path="/registropaciente" component={RegistroPaciente}/>
          <PrivRoute role="user" path="/editardatos" component={EditarDatosPaciente}/>
          <Route path="/signuppaciente" component={RegistroPaciente}/>i
          <PrivRoute role="prac" path="/editardatosexperto" component={EditarDatosExperto}/>i

        </Switch>
        </AuthProvider>
      <Footer />
    </div>
    </Router>
    
  );


  
}

export default App;
