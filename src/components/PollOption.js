function PollOption({text}) {
  return (
    <div className="poll-option">
      <label className="text-white text-lg">{text}</label>
      <input type="radio" name="option"/>
    </div>
  );
}

export default PollOption;