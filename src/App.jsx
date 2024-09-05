import React from 'react'
import { useState } from 'react'

function App() {

  const [task, settask] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const deleteHandler = (i) => {
      setmainTask(mainTask.filter((prev , index) => index !== i));
  }

  const submitHandler = (e) => {
      e.preventDefault();
      setmainTask([...mainTask ,{task}]);
      settask("");
  }

  let render = <h1 className='text-2xl font-bold mt-7 rounded-lg bg-slate-500 p-5 text-wh text-center '>No Task</h1>

  if(mainTask.length > 0){
    render = mainTask.map((t,i) =>(
        <div key={i} className='flex justify-between px-4 mt-5 rounded-lg bg-slate-500 '>
           <h1 className='text-3xl m-3 p-3 font-bold text-black'>{t.task}</h1>
            <button onClick={() => deleteHandler(i)} className='text-3xl'>❌</button>
        </div>
    ))
  }


  return (
   <>
      <h1 className='m-7 text-5xl text-center font-bold text-black'>TO DO LIST</h1>
      <div className='flex items-center justify-center gap-5'>
        <form onSubmit={submitHandler} className='flex gap-5'>
           <input autoFocus onChange={(e) => settask(e.target.value)} value={task} className='p-3 border-black border-4 font-bold text-2xl rounded-lg' type="text" placeholder='Write the Task here' />
           <button className='p-4 text-2xl text-white font-bold bg-black rounded-lg'>Add a Task</button>
        </form>
      </div>
      
          {render}
      
   </>
  )
}

export default App