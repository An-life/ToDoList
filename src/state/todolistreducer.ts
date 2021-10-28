import {FilterType, TaskType, TodoType} from '../App';
import {v1} from 'uuid';
import {ActionType} from './task-reducer';



export type  AddTodolistType = {
    type: 'ADD-TODOLIST'
    title: string
    todolistId:string
}
 export type RemoveTodolistType={
    type: 'REMOVE-TODOLIST'
    id: string
}
 export type ChangeTitleTodolistType={
    type: 'CHANGE-TODOLIST-TITLE'
    title:string
    id: string
}
export type  ChangeFilterTodolistType={
    type: 'CHANGE-TODOLIST-FILTER'
    filter:FilterType
    id: string
}

export let todoListId1 = v1();
export let todoListId2 = v1();

let initialState:Array<TodoType>=[{id: todoListId1, title: 'What to bye', filter: 'all'},
    {id: todoListId2, title: 'What to read', filter: 'all'}]

export const todolistReducer=(state: Array<TodoType>=initialState, action: ActionType): Array<TodoType> => {
    switch (action.type) {
        case 'ADD-TODOLIST':
        {let todoList: TodoType = {id: action.todolistId, title: action.title, filter: 'all'};
            return [ todoList,...state]}
        case 'REMOVE-TODOLIST':{
            let rightTodoLists = state.filter(t => t.id != action.id)
           return rightTodoLists;
        }
        case 'CHANGE-TODOLIST-TITLE':{
            const todoList = state.find(t => t.id === action.id)
            if (todoList) {
                todoList.title = action.title
            } return [...state];
        }
        case 'CHANGE-TODOLIST-FILTER':{
            const todoList = state.find(t => t.id === action.id)
            if (todoList) {
                todoList.filter = action.filter
            } return [...state];
        }
        default:
            return state;
    }
}
export const addTodolistAC= (title: string): AddTodolistType => {
    return {type: 'ADD-TODOLIST' , title: title,todolistId:v1()}
}
export const removeTodolistAC= (id: string): RemoveTodolistType => {
    return {type: 'REMOVE-TODOLIST' , id:id}
}
export const changeTitleTodolistAC=(newTitle:string,id:string):ChangeTitleTodolistType=>{
    return {type: 'CHANGE-TODOLIST-TITLE' ,title:newTitle, id:id}
}
export const changeFilterTodolistAC=(filter:FilterType,id:string):ChangeFilterTodolistType=>{
    return {type: 'CHANGE-TODOLIST-FILTER' ,filter:filter, id:id}
}