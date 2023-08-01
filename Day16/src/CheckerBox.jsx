function Box() {
  return <div className="block"></div>;
}

function Boxes() {
  return (
    <div className="row">
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </div>
  );
}

export default function BoxRow() {
  return (
    <>
    <h1>This was Part 2</h1>
    <div className="board">
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
      <Boxes />
    </div>
    </>
  );
}
