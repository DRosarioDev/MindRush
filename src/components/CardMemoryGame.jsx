export default function CardMemoryGame({
  color,
  isFlipped,
  isMatched,
  clickHandle,
  index,
}) {
  return (
    <div
      className={`card-memory-game ${isFlipped ? "flipped" : ""} ${isMatched ? "matched" : ""}`}
      onClick={() => clickHandle(index)}
      style={{
        backgroundColor: !isFlipped ? "#ffd200" : color.colorValue,
        boxShadow: !isFlipped ? "inset 0 0 7px 7px #cea800" : "",
      }}
    >
    </div>
  );
}
