function PageTitle({title}) {
  return (
    <header className="py-5 border-b shadow-xl bg-white fixed w-full">
      <h2 className="text-4xl font-medium">{title}</h2>
    </header>
  );
}

export default PageTitle;