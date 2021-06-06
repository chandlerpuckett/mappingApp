import Header from './components/Header'
import React from 'react'
import Tasks from './components/Tasks'
import { useState } from 'react'


const App = () => {
  const [tasks, setTasks] = useState([
    { text: 'this is text 1',
      id: 1,
      day: 'day1'
    }, 
    { text: 'this is text 2',
      id: 2,
      day: 'day2'
    },
    { text: 'this is text 3',
      id: 3,
      day: 'day3'
    }
  ])

  const deleteTask = (id) => {
    console.log('delete', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? 
        (<Tasks tasks={tasks} onDelete={deleteTask}/>) :
        ('420 blaze it skkrr skrrr!!!!!!')  
      }
    </div>
  );
}

export default App;
