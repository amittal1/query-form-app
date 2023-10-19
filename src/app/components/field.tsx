import { useState } from 'react';
import DatePicker from 'react-date-picker';

export default function Field({id, label, field_type, options, required}) {
    const [value, onChange] = useState();

    isRequired() {
        if (typeof required === 'string') {
            return required === 'true'
        }
        {id, values, defaultvalue} = required;
        const elem = document.querySelector('#' + id);
        if (elem.value in values) {
            return defaultvalue != 'true';
        }
        return defaultvalue == 'true'
    }
    renderField() {
        switch(field_type) {
            case 'select':
                return (
                    <select value={value} onChange={onChange}>
                        {options.map((val) => (
                            <option value={val}>{val}</option>
                        ))}
                    </select>
                );
            case 'textarea':
                return (<textarea value={value} onChange={onChange} />);
            case 'date':
                return (<DatePicker value={value} onChange={onChange} />)
            default:
              return <input type={field_type} value={value} onChange={onChange} />;
        }
    }
    return (
        <label id={id} required={isRequired()}>
            {label}
            ({renderField()})
        </label>
    );
}