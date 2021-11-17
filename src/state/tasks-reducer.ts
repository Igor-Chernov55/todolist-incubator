import {v1} from "uuid";
import {TasksStateType} from "../App";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    taskId: string
    todolistId: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-STATUS-TASK'
    id: string,
    isDone: boolean,
    todolistId: string
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-STATUS-TITLE'
    id: string,
    newTitle: string,
    todolistId: string
}

export type ActionType =
    RemoveTaskActionType
    | AddTaskActionType
    | ChangeTaskStatusActionType
    | ChangeTaskTitleActionType;

export const tasksReducer = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(task => task.id !== action.todolistId)
            }
        }

        case "ADD-TASK": {
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        }

        case 'CHANGE-STATUS-TASK' : {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(s => s.id !== action.todolistId ? s : {
                    ...s,
                    isDone: action.isDone
                })
            }
        }

        case "CHANGE-STATUS-TITLE": {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(title => title.id !== action.todolistId ?
                    title
                    :
                    {
                        ...title,
                        title: action.newTitle
                    })
            }
        }

        default:
            return state
    }
}


export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId, todolistId} as const
}

export const addTaskAC = (title: string, todolistId: string): AddTaskActionType => {
    return {type: 'ADD-TASK', title, todolistId} as const
}

export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {type: 'CHANGE-STATUS-TASK', id, isDone, todolistId} as const
}

export const changeTaskTitleStatusAC = (id: string, newTitle: string, todolistId: string) => {
    return {type: 'CHANGE-STATUS-TITLE', id, newTitle, todolistId} as const
}