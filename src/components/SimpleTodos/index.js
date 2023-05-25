import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {toodosList: initialTodosList}

  deleteTodo = uniqueNo => {
    const {toodosList} = this.state
    const resultTodosList = toodosList.filter(
      eachTodo => eachTodo.id !== uniqueNo,
    )

    this.setState({toodosList: resultTodosList})
  }

  render() {
    const {toodosList} = this.state
    return (
      <div className="bg-container">
        <div className="todos-container">
          <h1>Simple Todos</h1>
          <ul>
            {toodosList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo}
                key={eachTodo.id}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
