import { useParams } from 'react-router-dom';
import { TodoForm } from '../../components/TodoForm';
import { useTodos } from '../useTodos';


function EditTodoPage (){
    const params = useParams()
    const {stateUpdaters} = useTodos()
    const {editTodo} = stateUpdaters;

    const id = Number(params.id)

    return (
        <>
            <TodoForm
                label="Editar nuevo TODO"
                submitText = "Editar"
                submitEvent = { (newText) => editTodo(newText)}
            />
        </>
    )
}

export {EditTodoPage} 