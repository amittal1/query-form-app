import Field from './field';
import Button from './button';

export default function Body({bodyJson, onsubmit}) {
    const fieldsJson = bodyJson.formfields;
    const buttonsJson = bodyJson.buttons;
    return (
        <form id={bodyJson.id} >
            {fieldsJson.map(({id, label, field_type, options, required}) => (
                <Field id={id} label={label} field_type={field_type} options={options} required={required}>
            ))}

            <div id="buttons">
                {buttonsJson.map(({id, name, type}) => (
                    ({type === 'submit' ?
                        (<Button id={id} type={type} onClick={onsubmit}>{name}</Button>):
                        (<Button id={id} type={type}>{name}</Button>)
                    })
                ))}
            </div>
        </form>
    );
}