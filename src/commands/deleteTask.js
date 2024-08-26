import fs from 'fs'
import {jsonPath} from '../utils/initTasksFile.js'

const deleteTask = id => {
  if (!id) {
    console.log('Please enter your task id')
    return
  }
  const data = fs.readFileSync(jsonPath)
  const tasks = JSON.parse(data).tasks

  if (!tasks.some(task => task.id == id)) {
    console.log('There is no task with this ID')
    return
  }

  const newTasks = tasks.filter(task => task.id != id)

  fs.writeFileSync(jsonPath, JSON.stringify({tasks: newTasks}, null, 2), 'utf8')
  console.log(`Task deleted successfully (ID: ${id})`)
}

export default deleteTask
