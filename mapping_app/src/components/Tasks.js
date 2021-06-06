import Task from './Task'

const Tasks = ({tasks, onDelete}) => {
  
  return (
    // use setTasks as a "setter" to mutate the data
    <>
      {tasks.map((task)=> (
        <Task key={task.id} task={task} onDelete={onDelete}/>
      ))}
    </>
  )
}

export default Tasks
