import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectLoggedInUser} from '../slices/authSlice';
import PollsContainer from './PollsContainer';
import Sidebar from './Sidebar';
import NewPoll from './NewPoll';
import ViewPoll from './ViewPoll';
import LeaderBoard from './LeaderBoard';
import NotFound from './NotFound';

function PrivateApp() {

  const loggedInUser = useSelector(selectLoggedInUser);

  const {path} = useRouteMatch();

  return (
    <div>
      <div className="float-left clear-right">
        <Sidebar user={loggedInUser}/>
      </div>
      <div className="w-2/3 float-right">
        <Switch>
          <Route exact path={`${path}add`}>
            <div className="mr-12">
              <NewPoll/>
            </div>
          </Route>
          <Route exact path="/questions/:id" component={ViewPoll}/>
          <Route exact path={`${path}leaderboard`} component={LeaderBoard}/>
          <Route exact path={path} component={PollsContainer}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </div>
    </div>
  );
}

export default PrivateApp;