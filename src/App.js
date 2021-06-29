import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import CreateProfile from './components/Profile/CreateProfile/CreateProfile';
import Navbar from './components/Header/Navbar/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/createProfile">
            <CreateProfile />
          </Route>

        </Switch>
      </div>
    </Router >
  );
}

export default App;
