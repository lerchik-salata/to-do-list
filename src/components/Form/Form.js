import './Form.css'

import React from 'react';
import {useState} from 'react';

const Form = (props) => {
    const [value, setValue] = useState("");
    return (
        <form className="form"
            onSubmit={e => {
                e.preventDefault();
                props.putTodo(value);
                setValue("");
            }}
        >
            <input
                type="text"
                placeholder="New Task..."
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <input type="submit" value="ADD" className="button" />
        </form>

    );
};

export default Form;



