import { PlusCircle} from '@phosphor-icons/react'
import {v4 as uuid} from 'uuid'
import styles from './Todo.module.scss'
import clipboard from '../assets/clipboard.svg'
import { Task, TaskType } from './Task'
import { FormEvent, useState } from 'react'


// const tasks: TaskType[] = [
//     {
//       id: uuid(),
//       title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//       isComplete: false,
//     },
//     {
//       id: uuid(),
//       title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//       isComplete: true,
//     },
//     {
//       id: uuid(),
//       title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
//       isComplete: false,
//     },
// ]

export function Todo() {
  const [newTaskText, setNewTaskText] = useState('')
  const [tasks, setTasks] = useState<TaskType[]>([])

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()

    if (!newTaskText) {
      return
    }

    const newTask: TaskType = {
      id: uuid(),
      title: newTaskText,
      isComplete: false,
    }

    setTasks(state => [...state, newTask])
    setNewTaskText('')
  }

  function deleteTask(id: string) {
    setTasks(state => state.filter(task => task.id !== id))
  }

  function completeTask(id: string) {
    setTasks(state => state.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isComplete: !task.isComplete
        }
      }
      return task
    }))
  }
    

  return (
      <main className={styles.container}>
        <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
          <input 
            type="text"
            placeholder="Adicione uma nova tarefa" 
            value={newTaskText}
            onChange={e => setNewTaskText(e.target.value)}
          />
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </form>
        <div className={styles.taskListContainer}>
          <div className={styles.infoContainer}>
            <div>
              <p>
                Tarefas criadas
                <span className={styles.counter}>
                  {tasks.length}
                </span>
              </p>
            </div>
            <div>
              <p>
                Concluídas
                <span className={styles.counter}>
                  {
                    tasks.filter(task => task.isComplete).length
                  } de {tasks.length}
                </span>
              </p>
            </div>
          </div>
          { tasks.length === 0 && (
              <div className={styles.noTasksMessage}>
                <img src={clipboard} alt="clipboard" />
                <p>
                  <strong>Você ainda não tem tarefas cadastradas</strong>
                  <br />
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>
              )
          }
          <ul className={styles.taskList}>
          {
            tasks.length > 0 && tasks.map(task => (
              <Task 
                key={task.id}
                task={task} 
                onDeleteTask={deleteTask}
                onCompleteTask={completeTask}
              />
            ))
          }
          </ul>
        </div>
      </main>
  )
}