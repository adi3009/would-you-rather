import Avatar from './Avatar';
import PollOption from './PollOption';

function AnswerPoll({author, poll}) {
  return (
    <div className="border rounded shadow-xl p-5 grid grid-col-1 gap-2">
      <div className="justify-self-center">
        <Avatar url={author.avatarURL}/>
      </div>
      <p className="text-center">{author.name}</p>
      <p className="text-lg text-center">Asks</p>
      <h3 className="text-4xl text-center mb-2">Would you rather</h3>
      <form className="grid grid-col-1 gap-2 items-center">
        <PollOption text={poll.optionOne.text}/>
        <p className="text-center text-lg text-gray500">or</p>
        <PollOption text={poll.optionTwo.text}/>
        <button className="btn btn-action-primary justify-self-center mt-8">Submit</button>
      </form>
    </div>
  );
}

export default AnswerPoll;