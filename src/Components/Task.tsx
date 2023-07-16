import { Trash } from '@phosphor-icons/react';
import styles from './Task.module.scss'
import classNames from 'classnames'


export interface TaskType {
  id: string;
  title: string;
  isComplete: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
}

export function Task({ task, onDeleteTask,onCompleteTask }:TaskProps){
  return (
    <li className={classNames(styles.task, task.isComplete && styles.taskDone)}>
      <div>
        <input
          type="checkbox"
          onChange={() => onCompleteTask(task.id)}
          checked={task.isComplete}
          id={task.id}
        />
        <label htmlFor={task.id}/>
      </div>
      <div>
        <p>{task.title}</p>
      </div>
      <div>
        <button type="button" onClick={() => onDeleteTask(task.id)}>
          <Trash size={24} />
        </button>
      </div>
    </li>
  )
}