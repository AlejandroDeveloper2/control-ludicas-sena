import Login from './components/login';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import FormReportar from './components/FormReporteProblema';
import PanelControl from './pages/PanelControl';
import {
  BrowserRouter as Router,
  Route,
  Switch  
} from "react-router-dom";
import './styles/App.css';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/ReportarProblema" component={FormReportar}/>
          <Route exact path="/PanelControl" component={PanelControl}/>
          <Route component={NotFound} />
        </Switch>  
        <Footer/>  
      </Router>
    </div>
  );
}

export default App;
