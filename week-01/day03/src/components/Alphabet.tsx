function Alphabet() {
  const alphabets: Array<string> = ['A', 'B', 'C'];
  return (
    <>
      <ul>
        {alphabets.map((letter) => (
          <li key={letter}>{letter} Component</li>
        ))}
      </ul>
    </>
  );
}

export default Alphabet;
