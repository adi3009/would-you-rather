import PollListItem from './PollListItem';

function PollList({polls}) {
  return (
    <ul>
      {polls.map(poll => <li key={poll.id} className="my-4">
        <PollListItem avatar={poll.avatar} id={poll.id} text={poll.text}/>
      </li>)}
    </ul>
  );
}

export default PollList;