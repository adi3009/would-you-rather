function PageTitle({title}) {
  return (
    <header className="p-4 border-b shadow-xl bg-white fixed w-full">
      <h2 className="text-4xl font-light">{title}</h2>
    </header>
  );
}

export default PageTitle;