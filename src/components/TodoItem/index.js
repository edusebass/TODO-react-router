import React from 'react';
import { CompleteIcon } from '../../components/TodoIcon/CompleteIcon';
import { DeleteIcon } from '../../components/TodoIcon/DeleteIcon';
import { EditIcon } from '../../components/TodoIcon/EditIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onComplete={props.onComplete}
      />
      <p
        className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
      >
        {props.text}
      </p>
      <EditIcon
        onEdit={props.onEdit}
      />
      <DeleteIcon
        onDelete={props.onDelete}
      />
    </li>
  );
}

export { TodoItem };
