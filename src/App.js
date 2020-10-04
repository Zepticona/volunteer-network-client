import React, { createContext, useState } from 'react';
import { 
BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AllRegisteredWorks from './components/AllRegisteredWorks/AllRegisteredWorks';
import AllWorks from './components/AllWorks/AllWorks';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisteredWorks from './components/RegisteredWorks/RegisteredWorks';
import Registration from './components/Registration/Registration';

export const UserContext = createContext()
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
            <AllRegisteredWorks></AllRegisteredWorks>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/adminPanel">
            <AdminPanel></AdminPanel>
          </Route>
          <PrivateRoute path="/registration/:workId">
            <Registration></Registration>
          </PrivateRoute>
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
