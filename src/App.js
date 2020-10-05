import React, { createContext, useState } from 'react';
import { 
BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AllRegisteredWorks from './components/AllRegisteredWorks/AllRegisteredWorks';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PrivateRoute2 from './components/PrivateRoute2/PrivateRoute2';
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
          <Route path="/allRegisteredWorks">
            <AllRegisteredWorks></AllRegisteredWorks>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <Route path="/adminPanel">
            <AdminPanel></AdminPanel>
          </Route> */}
          <PrivateRoute path="/registration/:workId">
            <Registration></Registration>
          </PrivateRoute>
          <PrivateRoute2 path="/adminPanel">
            <AdminPanel></AdminPanel>
          </PrivateRoute2>
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
