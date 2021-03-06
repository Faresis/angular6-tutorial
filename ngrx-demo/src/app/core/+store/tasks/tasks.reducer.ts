import { TasksActionTypes, TasksActions } from './tasks.actions';
import { taskAdapter, TasksState, initialTasksState } from './tasks.state';

import { TaskModel } from './../../../tasks/models/task.model';

export function tasksReducer(state = initialTasksState, action: TasksActions): TasksState {
  console.log(`Reducer: Action came in! ${action.type}`);
  switch (action.type) {
    case TasksActionTypes.GET_TASKS: {
      console.log('GET_TASKS action being handled.');
      return {
        ...state,
        loading: true
      };
    }

    case TasksActionTypes.GET_TASKS_SUCCESS: {
      console.log('GET_TASKS_SUCCESS action being handled.');
      const data = [...<Array<TaskModel>>action.payload];
      return taskAdapter.addAll(data, {
        ...state,
        loading: false,
        loaded: true,
      });
    }

    case TasksActionTypes.GET_TASKS_ERROR: {
      console.log('GET_TASKS_ERROR action being handled.');
      const error = action.payload;
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }

    case TasksActionTypes.CREATE_TASK_SUCCESS: {
      console.log('CREATE_TASK_SUCCESS action being handled.');
      const task = { ...<TaskModel>action.payload };
      return taskAdapter.addOne(task, state);
    }

    case TasksActionTypes.UPDATE_TASK_SUCCESS: {
      console.log('UPDATE_TASK_SUCCESS action being handled.');
      const task = { ...<TaskModel>action.payload };
      return taskAdapter.updateOne({
        id: task.id,
        changes: task
      }, state);
    }

    case TasksActionTypes.DELETE_TASK_SUCCESS: {
      console.log('DELETE_TASK_SUCCESS action being handled.');
      const task = { ...<TaskModel>action.payload };
      return taskAdapter.removeOne(task.id, state);
    }

    case TasksActionTypes.CREATE_TASK_ERROR:
    case TasksActionTypes.UPDATE_TASK_ERROR:
    case TasksActionTypes.DELETE_TASK_ERROR: {
      console.log('DELETE_TASK_ERROR action being handled.');
      const error = action.payload;
      return {
        ...state,
        error
      };
    }

    default: {
      console.log('UNKNOWN_TAKS action being handled.');
      return state;
    }
  }
}

