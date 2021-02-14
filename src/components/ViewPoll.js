import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectPollById} from '../slices/pollsSlice';
import {selectLoggedInUser} from '../slices/authSlice';
import NotFound from './NotFound';
import AnswerPoll from './AnswerPoll';
import {selectUserById} from '../slices/usersSlice';
import PageTitle from './PageTitle';
import Avatar from './Avatar';
import {calculateMetrics, isAnswered as pollAnswered} from '../api/_DATA';

function ViewPoll() {
  const {id} = useParams();

  const poll = useSelector(selectPollById(id));

  const loggedInUser = useSelector(selectLoggedInUser);

  const isAnswered = poll && pollAnswered(poll, loggedInUser.id);

  const author = useSelector(selectUserById(poll && poll.author));

  const title = isAnswered ? 'View' : 'Answer';

  const answeredOptionContent = <span className="rounded-3xl px-4 py-1 bg-secondary text-primary900">Your answer</span>;

  const isOption1 = isAnswered && poll.optionOne.votes.includes(loggedInUser.id);

  const [optionOne, optionTwo, total, percentOne, percentTwo] = calculateMetrics(poll);

  const answeredContent =
    poll && <div className="border rounded shadow-xl p-5 grid grid-col-1 gap-2">
      <div className="justify-self-center">
        <Avatar url={author.avatarURL}/>
      </div>
      <p className="text-center">{author.name}</p>
      <p className="text-lg text-center">Asked</p>
      <h3 className="text-4xl text-center mb-2">Would you rather</h3>
      <div className="grid grid-col-1 gap-2 items-center">
        <div className="poll-option">
          <label className="text-white text-lg grid gap-2">
            {poll.optionOne.text}
            {isOption1 && answeredOptionContent}
            <span>{optionOne} / {percentOne}%</span>
          </label>
        </div>
        <p className="text-center text-lg text-gray500">or</p>
        <div className="poll-option">
          <label className="text-white text-lg grid gap-2">{poll.optionTwo.text}
            {!isOption1 && answeredOptionContent}
            <span>{optionTwo} / {percentTwo}%</span>
          </label>
        </div>
      </div>
    </div>;

  return (
    !poll ?
      <NotFound/>
      : <div>
        <div className="pb-24">
          <PageTitle title={title}/>
        </div>
        <div className="mr-24">
          {!isAnswered ? <AnswerPoll author={author} poll={poll}/> : answeredContent}
        </div>
      </div>
  );
}

export default ViewPoll;