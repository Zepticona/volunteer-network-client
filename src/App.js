import React, { createContext, useState } from 'react';
import { 
BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import AllWorks from './components/AllWorks/AllWorks';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/testingRoute">
            <AllWorks></AllWorks>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
