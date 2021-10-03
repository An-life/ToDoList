import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import {ToDoList} from './ToDoList';

export type FilterType = 'all' | 'active' | 'completed'
type TodoType = {
    id: string
    title: string
    filter: FilterType
}


function App() {
//state
    let todoListId1=v1();
    let todoListId2=v1();

    let [tasksObj, setTasks] = useState({
        [todoListId1]: [{id: v1(), title: 'HTML', isDone: true},
    {id: v1(), title: 'CSS', isDone: false},
    {id: v1(), title: 'React', isDone: false}],
    [todoListId2]:[{id: v1(), title: 'You', isDone: true},
        {id: v1(), title: 'Cook', isDone: false},
        {id: v1(), title: 'React', isDone: false}]
    });

//удаление таски
    function removeTask(id: string,todoListId:string) {
        let tasks=tasksObj[todoListId];
        let filteredTasks = tasks.filter(t => t.id !== id)
        tasksObj[todoListId]=filteredTasks;
        setTasks({...tasksObj});
    }

//добавление таски
    function addTask(title: string,todoListId:string) {
        let task = {id: v1(), title: title, isDone: false};
        let tasks=tasksObj[todoListId];
        let newTask = [task, ...tasks];
       tasksObj[todoListId]=newTask;
        setTasks({...tasksObj});
    }

//фильтрация тасок
    function changeFilter(value: FilterType, todoListId: string) {
        let todoList = todoLists.find(t => t.id === todoListId);
        if (todoList) {
            todoList.filter = value;
            setTodoLists([...todoLists]);
        }
    }


//изменение статуса таски
    function changeTaskStatus(id: string, isDone: boolean,todoListId:string) {
        let tasks=tasksObj[todoListId];
        let task = tasks.filter(t => t.id === id);
        if (task) {
            task[0].isDone = isDone;
            setTasks({...tasksObj});
        }
    }
    //удаление тудулиста
    function removeTodoList(todoListId:string) {
        let rightTodoLists=todoLists.filter(t=>t.id!=todoListId)
        setTodoLists(rightTodoLists);
        delete tasksObj[todoListId];
        setTasks({...tasksObj})

    }

    let [todoLists, setTodoLists] = useState<Array<TodoType>>(
        [{id: todoListId1, title: 'What to bye', filter: 'all'},
            {id: todoListId2, title: 'What to read', filter: 'all'}])


    return (
        <div className="App">
            {todoLists.map(tl => {
                let tasksForToDoList = tasksObj[tl.id];
                if (tl.filter === 'active') {
                    tasksForToDoList =tasksForToDoList .filter(t => t.isDone === false);
                }
                if (tl.filter === 'completed') {
                    tasksForToDoList = tasksForToDoList.filter(t => t.isDone === true);
                }

                return <ToDoList
                    key={tl.id}
                    id={tl.id}
                    title={tl.title}
                    tasks={tasksForToDoList}
                    removeTask={removeTask}
                    changeFilter={changeFilter}
                    addTask={addTask}
                    filter={tl.filter}
                    changeTaskStatus={changeTaskStatus}
                    removeTodoList={removeTodoList}
                />
            })}

        </div>)
}

export default App;
