import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const ToDoList = ({toDoItems, handleCheck, handleDelete, handleEdit}) => {
    return (
        <ul className="todo-list" id="task-list-1">
            {toDoItems.map((item) => (
                <Item id={item.id} content={item.content} complete={item.complete} handleCheck={handleCheck} handleDelete={handleDelete} handleEdit={handleEdit}/>
            ))}
        </ul>
    );
}

ToDoList.propTypes = {
    toDoItems: PropTypes.arrayOf (
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            content: PropTypes.string.isRequired,
            complete: PropTypes.bool.isRequired
        })
    ).isRequired,
    handleCheck: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleEdit: PropTypes.func.isRequired
};

export default ToDoList;