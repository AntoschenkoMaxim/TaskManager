import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks, title, remove }) => {
  return (
    <div>
      <h1 className='list__tasks'>{title}</h1>
      {tasks.map((task, index) =>
        <div>
          <TaskItem remove={remove} number={index + 1} task={task} key={task.id} />
          {/* Передаем remove на 1 уровень ниже через props */}
        </div>
      )}
    </div>
  )
}

export default TaskList