
const Tasks = ({tasks}) => {
  
  return (
    // use setTasks as a "setter" to mutate the data
    <>
      {tasks.map((task)=> (<h3 key={task.id}>{task.text}</h3>))}
    </>
  )
}

export default Tasks
