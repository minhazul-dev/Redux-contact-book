
import { ToastContainer } from 'react-toastify';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Add from './components/Add/Add';
function App() {
  return (

<Router>
      <div>
        <Navbar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/add">
           <Add/>
          </Route>
          <Route path="/edit/:id">
            <h1>this is edit</h1>
          </Route>
        </Switch>
      </div>
    </Router>


    // <div>
    //   <ToastContainer/>
    // <Navbar/>
    // </div>
  );
}

export default App;
