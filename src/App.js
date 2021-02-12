import LoginForm from './components/LoginForm';
import Avatar from './components/Avatar';
import PollListItem from './components/PollListItem';
import Sidebar from './components/Sidebar';
import PollList from './components/PollList';
import PageTitle from './components/PageTitle';
import AnswerPoll from './components/AnswerPoll';
import NewPoll from './components/NewPoll';

const polls = [...Array(10).keys()].map(id => {
  return {
    id: id+1,
    avatar: `avatars/avatar${id+1}.jpg`,
    text: `...money or ${id+1}`
  }
});
function App() {
  return (
    //<Avatar url='avatars/avatar1.jpg'/>
    <div>
      <div className="float-left clear-right">
      <Sidebar avatar='avatars/avatar5.jpg' name="john"/>
      </div>
      <div className="w-2/3 float-right" >
        {/*<PageTitle title="Polls Not Answered"/>
      <div className="mt-28">
      <PollList polls={polls}/>
      </div>*/}
      <div className="m-20">
        {/*<AnswerPoll/>*/}
        <NewPoll/>
      </div>
      </div>
    </div>

  );
}

export default App;
