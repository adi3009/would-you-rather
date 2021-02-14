import React from 'react';
import PageTitle from './PageTitle';
import {useSelector} from 'react-redux';
import {selectAllUsers} from '../slices/usersSlice';
import Avatar from './Avatar';

function LeaderBoard() {

  const allUsers = useSelector(selectAllUsers);

  const compareFn = (user1, user2) => {
    const u1 = Object.keys(user1.answers).length + user1.questions.length;
    const u2 = Object.keys(user2.answers).length + user2.questions.length;

    return u2 - u1;
  };

  const leaders = Object.values(allUsers).sort(compareFn);

  return (
    <React.Fragment>
      <PageTitle title='Leaderboard'/>
      <div className="mt-28">
        <ul>
          {leaders.map(leader =>
            <li key={leader.id} className="my-4">
              <div className="flex p-4 rounded shadow-md w-1/2 justify-between items-center">
                <div>
                  <Avatar url={leader.avatarURL}/>
                  <p>{leader.name}</p>
                </div>

                <div className="text-right">
                  <div className="rounded-3xl bg-primaryInactive px-2 py-1 mb-2">
                    Answers {Object.keys(leader.answers).length}
                  </div>
                  <div className="rounded-3xl bg-secondary px-2 py-1">
                    Questions {leader.questions.length}
                  </div>
                </div>
              </div>
            </li>)
          }
        </ul>
      </div>
    </React.Fragment>
  )
}

export default LeaderBoard;