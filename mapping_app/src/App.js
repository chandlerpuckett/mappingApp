import Header from './components/Header'
import React from 'react'
import Tasks from './components/Tasks'
import { useState } from 'react'


const App = () => {
  const [tasks, setTasks] = useState([
    { text: 'this is text 1',
      id: 1
    }, 
    { text: 'this is text 2',
      id: 2
    },
    { text: 'this is text 3',
      id: 3
    }
  ])


  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
