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
import MenuUsuarios from './components/MenuUsuarios';
import MenuExperto from './components/MenuExperto';
import ExpRoute from './components/ExpRoute';
import MenuPaciente from './components/MenuPaciente';
import Pagos from './components/Pagos';
import RegistroPaciente from './components/RegistroPaciente';
import UserRoute from './components/UserRoute';
import EditarDatosPaciente from './components/EditarDatosPaciente';
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
          <Route exact path="/inicio" component = {LandingPage}/>
          <Route path="/signup" component ={Signup}/>
          <Route path="/signuppract" component ={SignupPract}/>
          <Route path="/login" component={Login}/>
          <ExpRoute path="/vercitas" component={VerCitas}/>
          <Route path="/agendarcitas" component={AgendarCita}/>
          <ExpRoute path="/expedientes" component={ListaExpedientes} />
          <UserRoute path="/expediente" component = {ExpedienteIndividual} />
          <Route path="/registro" component = {MenuUsuarios}/>
          <Route path="/experto" component={MenuExperto}/>
          <Route path="/paciente" component={MenuPaciente}/>
          <Route path="/pagos" component={Pagos}/>
          <Route path="/registropaciente" component={RegistroPaciente}/>
          <Route path="/editardatos" component={EditarDatosPaciente}/>
          <Route path="/signuppaciente" component={RegistroPaciente}/>i

        </Switch>
        </AuthProvider>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
