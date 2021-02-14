import {useState} from 'react';
import Avatar from './Avatar';
import PollOption from './PollOption';
import {answerPoll} from '../slices/pollsSlice';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoggedInUser} from '../slices/authSlice';
import {useHistory} from 'react-router-dom';

function AnswerPoll({author, poll}) {
  const data = {optionOne: 'optionOne', optionTwo: 'optionTwo'};

  const [answer, setAnswer] = useState('');

  const loggedInUser = useSelector(selectLoggedInUser);

  const history = useHistory();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const onAnswerSave = async (e) => {
    e.preventDefault();
    const pollAnswer = {
      authedUser: loggedInUser.id,
      qid: poll.id,
      answer
    };
    await dispatch(answerPoll(pollAnswer));
    history.push('/');
  };

  return (
    <div className="border rounded shadow-xl p-5 grid grid-col-1 gap-2">
      <div className="justify-self-center">
        <Avatar url={author.avatarURL}/>
      </div>
      <p className="text-center">{author.name}</p>
      <p className="text-lg text-center">Asks</p>
      <h3 className="text-4xl text-center mb-2">Would you rather</h3>
      <form className="grid grid-col-1 gap-2 items-center">
        <PollOption text={poll.optionOne.text}
                    value={data.optionOne}
                    onChange={handleChange}
                    checked={data.optionOne === answer}/>
        <p className="text-center text-lg text-gray500">or</p>
        <PollOption text={poll.optionTwo.text}
                    value={data.optionTwo}
                    onChange={handleChange}
                    checked={data.optionTwo === answer}/>
        <button className="btn btn-action-primary justify-self-center mt-8" onClick={onAnswerSave}>Save</button>
      </form>
    </div>
  );
}

export default AnswerPoll;