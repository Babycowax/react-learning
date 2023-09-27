function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
