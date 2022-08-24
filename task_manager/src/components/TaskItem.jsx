import React from 'react'
import MyButton from './UI/button/MyButton'

const TaskItem = (props, remove) => {
	return (
		<div className='task'>
			<div className='task__content'>
				<strong>{props.number}. {props.task.title}</strong>
				<div>
					{props.task.body}
				</div>
			</div>
			<div className='task__tag-type'>
				{props.task.type}
			</div>
			<div className='task__tag-priority'>
				{props.task.priority}
			</div>
			<div className='task__btns'>
				<MyButton onClick={() => props.remove(props.task)}>Delete</MyButton>
				{/* Достаем по клику текущую таску, передавая функцию удаления на 2 уровень ниже */}
			</div>
		</div>
	)
}

export default TaskItem