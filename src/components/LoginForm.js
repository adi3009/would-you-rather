import {useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectAllUsers} from '../slices/usersSlice';
import {login} from '../slices/authSlice';

function LoginForm() {

  const history = useHistory();

  const location = useLocation();

  const from = location.state || '/';

  const users = useSelector(selectAllUsers);

  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState('');

  const loginEnabled = !!selectedUser;

  const handleUserSelected = (e) => {
    setSelectedUser(e.target.value);
  };

  const handleLogin = () => {
    if (selectedUser) {
      dispatch(login(selectedUser));
      history.replace(from);
    }
  };

  return (
    <div
      className="flex flex-col items-stretch p-6 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl space-y-2">
      <h6 className="text-3xl text-center">Login</h6>
      <h6 className="text-2xl text-center">Would You Rather</h6>
      <select value={selectedUser} onChange={handleUserSelected}>
        <option>Please a user to login</option>
        {users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
      </select>
      {loginEnabled &&
      <button className="btn btn-action-primary" type="submit" onClick={handleLogin}>
        Login
      </button>}
    </div>
  )
}

export default LoginForm;