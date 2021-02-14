import Avatar from './Avatar';
import {useSelector} from 'react-redux';
import {selectAllUsers} from '../slices/usersSlice';
import {Link} from 'react-router-dom';

function PollListItem({poll}) {
  const {id, author, optionOne, optionTwo} = poll;

  const text = `...${optionOne.text.substring(2)} ${optionTwo.text.substring(4)}...`;

  const allUsers = useSelector(selectAllUsers);

  const avatarUrl = allUsers[author].avatarURL;

  return (
    <div className="flex p-4 rounded shadow-md w-1/2">
      <Avatar url={avatarUrl}/>
      <div className="ml-4">
        <h5 className="text-2xl">Would you rather</h5>
        <p className="text-sm text-gray-500 mt-2">{text}</p>
        <Link to={`/questions/${id}`} className="btn mt-4">View Poll</Link>
      </div>
    </div>
  );
}

export default PollListItem;