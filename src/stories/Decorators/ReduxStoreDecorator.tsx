import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {v1} from 'uuid';
import {todolistReducer} from '../../state/todolistreducer';
import {taskReducer} from '../../state/task-reducer';
import {TaskStatuses, TodoTaskPriorities} from '../../API/todoList-api';

export type AppRootType=ReturnType<typeof rootReducer>
let rootReducer=combineReducers({
    todolists:todolistReducer,
    tasks:taskReducer
})

const initialGlobalState:AppRootType={
    todolists:[
        {id:'todolistId1',title:'What to learn',filter:'all', addedDate: '',
            order:0},
        {id:'todolistId2',title:'What to bue',filter:'all', addedDate: '',
            order:0}
    ],
    tasks:{
        ['todolistId1']:[
            {id:v1(),title:'Wghj', status:TaskStatuses.New,
                todoListId:'todolistId1',
                description:'',
                completed: false,
                priority: TodoTaskPriorities.Low,
                startDate: '',
                deadline: '',
                order: 0,
                addedDate: ''},
            {id:v1(),title:'Wghhhh',status:TaskStatuses.New,todoListId:'todolistId1',
                description:'',
                completed: false,
                priority: TodoTaskPriorities.Low,
                startDate: '',
                deadline: '',
                order: 0,
                addedDate: ''}
        ],
        ['todolistId2']:[
            {id:v1(),title:'Wfgfhg',status:TaskStatuses.New,
                todoListId:'todolistId2',
                description:'',
                completed: false,
                priority: TodoTaskPriorities.Low,
                startDate: '',
                deadline: '',
                order: 0,
                addedDate: ''},
            {id:v1(),title:'Wghggg',status:TaskStatuses.New,
                todoListId:'todolistId2',
                description:'',
                completed: false,
                priority: TodoTaskPriorities.Low,
                startDate: '',
                deadline: '',
                order: 0,
                addedDate: ''}
        ]
    }
}


export const StorybookStore = createStore(rootReducer,initialGlobalState);
export const ReduxStoreDecorator=(storyFn:any)=>{
    return <Provider store={StorybookStore}>{storyFn()}</Provider>}