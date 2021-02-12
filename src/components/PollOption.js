function PollOption({text}) {
  return (
    <div className="rounded py-6 px-5 bg-primary900 flex justify-between items-center">
      <label className="text-white text-lg">{text}</label>
      <input type="radio" name="option"/>
    </div>
  );
}

export default PollOption;