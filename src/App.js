import './App.css';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CountryDetail from './components/CountryDetail/CountryDetail';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/country/:countryName">
            <CountryDetail></CountryDetail>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
