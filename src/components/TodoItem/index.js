// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {title, id} = todoItem
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
