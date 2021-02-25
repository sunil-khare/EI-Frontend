
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Configure from './pages/Configure'
import Profile from './pages/Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css'
import 'animate.css/animate.compat.css'
import 'animate.css/animate.css'

import Support from './pages/Support';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid font-css" >
        {/* <HashRouter> */}
          <Switch>
            <Route exact path="/dashboard"><Home /></Route>
            <Route exact path="/"><Home /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/configure"><Configure /></Route>
            <Route path="/profile"><Profile /></Route>
            <Route path="/support"><Support /></Route>
          </Switch>
        {/* </HashRouter> */}
      </div>
    </Router>
  );
}


export default App;


