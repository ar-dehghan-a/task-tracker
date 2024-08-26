import fs from 'fs'
import {jsonPath} from '../utils/initTasksFile.js'

const addTask = description => {
  if (!description) {
    console.log('Please enter your task')
    return
  }
  const data = fs.readFileSync(jsonPath)
  const tasks = JSON.parse(data).tasks

  const lastId = tasks[tasks.length - 1]?.id || 0
  const newTask = {
    id: lastId + 1,
    description: description,
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: null,
  }

  tasks.push(newTask)
  fs.writeFileSync(jsonPath, JSON.stringify({tasks}, null, 2), 'utf8')
  console.log(`Task added successfully (ID: ${newTask.id})`)
}

export default addTask
