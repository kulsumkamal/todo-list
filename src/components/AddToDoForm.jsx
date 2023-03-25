import React, { useCallback, useState }  from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';



function AddToDoForm({onAddToDo}) {
    const [inputValue, setInputValue] = useState("");

const handleChange = (e) => {
    e.preventDefault();
    setInputValue(e.currentTarget.value);
}

const addToDoItem = (e) => {
    e.preventDefault();

    const item = {
        id: uuidv4(),
        content: inputValue,
        complete: false
    }
    onAddToDo(item);
    setInputValue("");
}
    return (
        <div>
        <form onSubmit={addToDoItem}>
            <input placeholder='Enter Task' type="text" value={inputValue} onChange={handleChange}/>
            <button className="submitBtn" type="submit"> Add</button>
        </form>
        </div>
    )
}
AddToDoForm.propTypes = {
    onAddToDo: PropTypes.func.isRequired
}

export default AddToDoForm;