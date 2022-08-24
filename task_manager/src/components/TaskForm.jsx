import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const TaskForm = ({ create }) => {

	const [task, setTask] = useState({ title: '', body: '', type: '', priority: '' })

	const addNewTask = (e) => {
		e.preventDefault()
		const newTask = {
			...task, id: Date.now()
		}
		create(newTask)
		setTask({ title: '', body: '', type: '', priority: '' })
	}

	return (
		<form>
			<MyInput
				value={task.title}
				onChange={e => setTask({ ...task, title: e.target.value })}
				type='text'
				placeholder='Name task'
			/>
			<MyInput
				value={task.body}
				onChange={e => setTask({ ...task, body: e.target.value })}
				type='text'
				placeholder='Description task'
			/>
			<MyInput
				value={task.type}
				onChange={e => setTask({ ...task, type: e.target.value })}
				type='text'
				placeholder='Type task'
			/>
			<MyInput
				value={task.priority}
				onChange={e => setTask({ ...task, priority: e.target.value })}
				type='text'
				placeholder='Priority task'
			/>
			<MyButton onClick={addNewTask}>Add task</MyButton>
		</form>
	)
}

export default TaskForm