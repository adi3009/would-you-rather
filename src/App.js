import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Sidebar from './components/Sidebar';
import {useSelector} from 'react-redux';
import {selectLoggedInUser} from './slices/authSlice';

function App() {

  const loggedInUser = useSelector(selectLoggedInUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/"
               render={({location}) => loggedInUser ? <Sidebar user={loggedInUser}/>: <Redirect to={{
                 pathname: '/login',
                 state: {from: location}
               }}/>}
        />
        <Route exact path="/login" component={LoginForm}/>
      </Switch>
    </Router>
  );
}

export default App;
