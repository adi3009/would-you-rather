import Avatar from './Avatar';
import PollOption from './PollOption';

function AnswerPoll() {
  return (
    <div className="border rounded shadow-xl p-5 grid grid-col-1 gap-2">
      <div className="justify-self-center">
      <Avatar url="avatars/avatar6.png"/>
      </div>
      <p className="text-center">snowflake</p>
      <p className="text-lg text-center">Asks</p>
      <h3 className="text-4xl text-center mb-2">Would you rather</h3>
      <form className="grid grid-col-1 gap-2 items-center">
        <PollOption text="have more time"/>
        <p className="text-center text-lg text-gray500">or</p>
        <PollOption text="have more money"/>
        <button className="btn btn-action-primary justify-self-center mt-8">Submit</button>
      </form>
    </div>
  );
}

export default AnswerPoll;