import Avatar from './Avatar';

function PollListItem({avatar, text, id}) {
  return (
    <div className="flex p-4 rounded shadow-md w-1/2">
      <Avatar url={avatar}/>
      <div className="ml-4">
        <h5 className="text-2xl">Would you rather</h5>
        <p className="text-sm text-gray-500 mt-2">{text}</p>
        <button className="btn mt-4">View Poll</button>
      </div>
    </div>
  );
}

export default PollListItem;