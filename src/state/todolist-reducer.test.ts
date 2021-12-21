import {
    addTodolistAC,
    changeFilterTodolistAC,
    changeTitleTodolistAC, changeTodoListEntityStatusAC, FilterType,
    removeTodolistAC, setTodoListAC, TodoListDomainType,
    todolistReducer
} from './todolist-reducer';
import {v1} from "uuid";
import {RequestStatusType} from "./appReducer";

test('new todolist should be add', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newTitleTodo = {
        id: 'todolistId3',
        title: 'New todolist',
        addedDate: '',
        order: 0
    }
    const startState: Array<TodoListDomainType> = [
        {
            id: todolistId1, title: 'What to learn', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        },
        {
            id: todolistId2, title: 'What to buy', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        }
    ]
    const endState = todolistReducer(startState, addTodolistAC(newTitleTodo))

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe(newTitleTodo.title);
    expect(endState[0].filter).toBe('all')
})

test(' todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    const startState: Array<TodoListDomainType> = [
        {
            id: todolistId1, title: 'What to learn', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        },
        {
            id: todolistId2, title: 'What to buy', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        }
    ]
    const endState = todolistReducer(startState, removeTodolistAC(todolistId2))

    expect(endState.length).toBe(1);
    expect(endState[0].title).toBe('What to learn');
})

test(' todolist should have new title', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    const startState: Array<TodoListDomainType> = [
        {
            id: todolistId1, title: 'What to learn', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        },
        {
            id: todolistId2, title: 'What to buy', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        }
    ]
    let newTitle = 'What to do'
    const endState = todolistReducer(startState, changeTitleTodolistAC(newTitle, todolistId1))

    expect(endState.length).toBe(2);
    expect(endState[0].title).toBe(newTitle);
})

test(' todolist should have new filter', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    const startState: Array<TodoListDomainType> = [
        {
            id: todolistId1, title: 'What to learn', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        },
        {
            id: todolistId2, title: 'What to buy', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        }
    ]
    let newFilter: FilterType = 'completed'
    const endState = todolistReducer(startState, changeFilterTodolistAC(newFilter, todolistId1))

    expect(endState.length).toBe(2);
    expect(endState[0].filter).toBe(newFilter);
})

test('todolists should be set to the state', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    const startState: Array<TodoListDomainType> = [
        {
            id: todolistId1, title: 'What to learn', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        },
        {
            id: todolistId2, title: 'What to buy', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        }
    ]
    const action = setTodoListAC(startState)
    const endState = todolistReducer([], action)

    expect(endState.length).toBe(2)
})

test(' todolist entityStatus should be changed ', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    const startState: Array<TodoListDomainType> = [
        {
            id: todolistId1, title: 'What to learn', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        },
        {
            id: todolistId2, title: 'What to buy', filter: 'all', entityStatus: 'loading', addedDate: '',
            order: 0
        }
    ]
    let newStatus: RequestStatusType = 'idle'
    const action = changeTodoListEntityStatusAC(todolistId1, newStatus)
    const endState = todolistReducer(startState, action)

    expect(endState[0].entityStatus).toBe('idle');
    expect(endState[1].entityStatus).toBe('loading');

})