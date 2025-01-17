import React,{useState} from 'react';

const TodoApp: React.FC = () =>{
    const [tasks,setTasks] =useState<string[]>([]);
    const[task,setTask] =useState<string>('')
 const handleAddTask=() =>{
    if (task.trim()) {
        setTasks([...tasks, task.trim()]);
        setTask(''); 
      }
 }   

return(
    <div className='h-[400px]'>
        <h1 className='text-4xl font-bold mb-12 ml-10 mt-20'>Todo App</h1>

        <div className='flex'>
        <div className=' h-[270px] w-[50%]'>
        <div>
        <input className="border-2 p-3 h-32 rounded-xl ml-10 mb-2 mr-2"
        type="text" 
        value={task}
        onChange={(e)=>setTask(e.target.value)}
        placeholder="Enter Todo" />
        </div>

        <button
        onClick={handleAddTask}
         className='px-4 h-16 py-1 bg-blue-500 ml-10 text-white rounded'>
            Add Todo
         </button>
        </div>

        <div className='h-52 w-[650px] bg-blue-300 overflow-hidden items-center'>
            <h3 className='text-3xl bg-transparent font-semibold'>Tasks</h3>
            <ul className='mt-4 flex flex-wrap'>
                {tasks.map((t,index) =>(
                    <li key={index} className='border-b p-2'>
                        <div>|  {t}  |</div>
                    </li>
                ))}

            </ul>
        </div>
        </div>
    </div>
);
};
export default TodoApp;
