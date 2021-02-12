function Avatar({url}) {
  return (
    <div className="rounded-full border-2 border-secondary800 h-16 w-16 overflow-hidden shadow-lg">
      <img src={url} className=""/>
    </div>
  );
}

export default Avatar;