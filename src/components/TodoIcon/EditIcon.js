import React from 'react';
import { TodoIcon } from './';

function EditIcon({ completed, onComplete }) {

    const onEdit = ((e) => {
        console.log("MIJIN")
    })
  return (
    <TodoIcon
      type="edit"
      onClick={onEdit}
    />
  );
  
}

export {EditIcon} ;
