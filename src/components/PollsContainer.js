import React, {useEffect, useState} from 'react';
import PageTitle from './PageTitle';
import PollList from './PollList';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPolls, selectAllPolls} from '../slices/pollsSlice';
import {selectLoggedInUser} from '../slices/authSlice';

function PollsContainer() {
  const status = useSelector(state => state.polls.status);

  const loggedInUser = useSelector(selectLoggedInUser);

  const dispatch = useDispatch();

  const allPolls = useSelector(selectAllPolls);

  const splitPolls = () => {
    const answered = [];
    const notAnswered = [];

    Object.values(allPolls).forEach(poll => {
      if (poll.optionOne.votes.includes(loggedInUser.id) || poll.optionTwo.votes.includes(loggedInUser.id)) {
        answered.push(poll);
      } else {
        notAnswered.push(poll);
      }
    });

    return [answered, notAnswered];
  };

  const [answeredPolls, notAnsweredPolls] = splitPolls();

  const [showAnswered, setShowAnswered] = useState();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPolls());
    }
  }, [status, dispatch]);

  const handleNotAnswered = () => {
    setShowAnswered(false);
  };

  const handleAnswered = () => {
    setShowAnswered(true);
  };

  const polls = showAnswered ? answeredPolls : notAnsweredPolls;

  const tabClass = 'py-2 text-center border-r flex-grow cursor-pointer';

  return (
    <React.Fragment>
      <PageTitle title={showAnswered ? 'Answered' : 'Not Answered'}/>
      <div className="mt-24 ml-6">
        {status === 'loading' ? <h4 className="text-lg">Loading...</h4> : <PollList polls={polls}/> }
      </div>
      <div className="fixed bottom-0 right-0 w-2/3 bg-primary900 text-white">
        <div className="flex items-center">
          <div className={!showAnswered ? tabClass + ' text-secondary' : tabClass} onClick={handleNotAnswered}>
            Not Answered
          </div>
          <div className={showAnswered ? tabClass + ' text-secondary' : tabClass} onClick={handleAnswered}>
            Answered
          </div>
        </div>
      </div>
    </React.Fragment>
  );

}

export default PollsContainer;