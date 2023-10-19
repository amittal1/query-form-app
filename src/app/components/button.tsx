export default function Button({id, name, type, onclick}) {

    return (
        <button id={id} type={type} onClick={onclick}>{name}</button>
    );
}