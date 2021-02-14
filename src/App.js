import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import {useSelector} from 'react-redux';
import {selectLoggedInUser} from './slices/authSlice';
import PrivateApp from './components/PrivateApp';

function App() {

  const loggedInUser = useSelector(selectLoggedInUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/"
               render={({location}) => loggedInUser ? <PrivateApp/>: <Redirect to={{
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
