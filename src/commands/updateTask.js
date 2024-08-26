import fs from 'fs'
import {jsonPath} from '../utils/initTasksFile.js'

const updateTask = (id, description) => {
  if (!id) {
    console.log('Please enter your task id')
    return
  }
  if (!description) {
    console.log('Please enter your task description')
    return
  }

  const data = fs.readFileSync(jsonPath)
  let tasks = JSON.parse(data).tasks

  if (!tasks.some(task => task.id == id)) {
    console.log('There is no task with this ID')
    return
  }

  tasks = tasks.map(task =>
    task.id == id ? {...task, description, updatedAt: new Date().toISOString()} : task
  )

  fs.writeFileSync(jsonPath, JSON.stringify({tasks}, null, 2), 'utf8')
  console.log(`Task updated successfully (ID: ${id})`)
}

export default updateTask
