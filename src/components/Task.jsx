import React from 'react'

function Task(props) {
    console.log(props.todos, "task");
  return (
    <div>
        {
            props.todos.map(item => (
                <p>{item.name} - {item.isComplete ? "complete" : "incomplete"}</p>
            ))
        }
    </div>
  )
}

export default Task