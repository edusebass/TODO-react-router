import { TodoForm } from '../../components/TodoForm';


function EditTodoPage (){
    return (
        <>
            <TodoForm
                label="Editar nuevo TODO"
                submitText = "Editar"
                submitEvent = { () => console.log("llamar a edittodo")}
            />
        </>
    )
}

export {EditTodoPage} 