interface sectionProps {
  id: number;
  title: string;
  desc: string;
}

function Section({ id, title, desc }: sectionProps) {
  return (
    <section id={`section ${id}`}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </section>
  );
}

export default Section;
