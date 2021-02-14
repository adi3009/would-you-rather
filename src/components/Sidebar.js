import {NavLink, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from '../slices/authSlice';
import Avatar from './Avatar';

function Sidebar({user}) {

  const dispatch = useDispatch();

  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.replace('/login');
  };

  return (
    <div className="min-h-screen fixed w-1/6 border-r shadow-xl bg-gray-100">
      <div className="flex flex-col">
        <div className="p-4 self-center">
          <Avatar url={user.avatarURL}/>
          <p className="text-center pt-2">{user.name}</p>
        </div>
        <nav className="mt-8">
          <ul>
            <li className="px-2 py-4 hover:bg-primary50">
              <NavLink to="/" activeClassName="text-primary">Home</NavLink>
            </li>
            <li className="px-2 py-4 hover:bg-primary50">
              <NavLink to="/leaderboard" activeClassName="text-primary">Leaderboard</NavLink>
            </li>
          </ul>
        </nav>
        <div className="border-t">
          <button className="btn ml-2 mt-6" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;