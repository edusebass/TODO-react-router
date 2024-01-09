import { TodoForm } from '../../components/TodoForm';

function NewTodoPage (){
    return (
        <>
            <TodoForm
                label="Escribe tu nuevo TODO"
                submitText = "Añadir"
                submitEvent = { () => console.log("llamar a add todo")}
            />
        </>
    )
}

export default NewTodoPage