import PollListItem from './PollListItem';

function PollList({polls}) {
  return (
    <ul>
      {polls.map(poll => <li key={poll.id} className="my-4">
        <PollListItem poll={poll}/>
      </li>)}
    </ul>
  );
}

export default PollList;