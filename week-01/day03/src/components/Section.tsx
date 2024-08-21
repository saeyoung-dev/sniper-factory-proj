interface SectionProps {
  id: number;
  title: string;
  desc: string;
  onClickHandler: (title: string) => void;
}

function Section({ id, title, desc, onClickHandler }: SectionProps) {
  return (
    <section id={`section ${id}`}>
      <h2>{title}</h2>
      <p>{desc}</p>
      <button type='button' onClick={() => onClickHandler(title)}>
        See More
      </button>
    </section>
  );
}

export default Section;
