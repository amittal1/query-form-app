

export default function Header({id, title, description}) {

  return (
    <h1 id={id}>
        {title}
        <p>{description}</p>
    </h1>
  );
}