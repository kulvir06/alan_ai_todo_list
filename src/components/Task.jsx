import React from 'react'

function Task(props) {
  console.log(props.todos, "task");
  return (
    <div>
      {props.todos.map(item => (
        <div class="space-y-2 space-x-2 max-w-md mx-auto bg-red-400 rounded-xl shadow-md md:max-w-2xl">
          <div class="md:flex space-x-2">
            <div class="p-8 space-x-2">
              <p class="uppercase tracking-wide text-sm text-blue-700 font-semibold">
                {item.name}
              </p>
              <p class="mt-2 text-blue-500">
                {item.isComplete ? "COMPLETE" : "INCOMPLETE"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}

export default Task