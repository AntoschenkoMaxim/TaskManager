import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const TaskFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				placeholder='Поиск'
			/>
			<MySelect
				value={filter.sort}
				onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
				defaultValue='Sorted by'
				options={[
					{ value: 'title', name: 'By title' },
					{ value: 'body', name: 'By description' },
					{ value: 'type', name: 'By type' },
					{ value: 'priority', name: 'By priority' }
				]} />
		</div>
	)
}

export default TaskFilter