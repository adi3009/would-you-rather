import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import {useSelector} from 'react-redux';
import {selectLoggedInUser} from './slices/authSlice';
import PrivateApp from './components/PrivateApp';
import {usersLoaded} from './slices/usersSlice';

function App() {

  const isUsersLoaded = useSelector(usersLoaded);

  const loggedInUser = useSelector(selectLoggedInUser);

  return (
    isUsersLoaded ?
      <Router>
        <Switch>
          <Route exact path="/login"
                 render={
                   () => !loggedInUser ?
                     <LoginForm/> :
                     <Redirect to={{pathname: '/'}}
                     />}
          />
          <Route path="/"
                 render={({location}) => loggedInUser ? <PrivateApp/> : <Redirect to={{
                   pathname: '/login',
                   state: {from: location}
                 }}/>}
          />
        </Switch>
      </Router> : <p>Loading...</p>
  );
}

export default App;
