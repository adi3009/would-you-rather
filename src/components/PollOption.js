function PollOption({text, value, onChange}) {
  return (
    <div className="poll-option">
      <label className="text-white text-lg">{text}</label>
      <input type="radio" name="option" value={value} onChange={onChange}/>
    </div>
  );
}

export default PollOption;