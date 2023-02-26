import React, { useState } from 'react';

function InputForm({ name, label, ...rest }) {
    // const [name,setName] = useState("")

    return (
        <div className='form-group mb-2'>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                className="form-control mt-1"
                {...rest}
            />
        </div>
    );
}

export default InputForm;