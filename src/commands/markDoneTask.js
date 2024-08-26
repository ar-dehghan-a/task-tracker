import fs from 'fs'
import {jsonPath} from '../utils/initTasksFile.js'

const markDoneTask = id => {
  if (!id) {
    console.log('Please enter your task id')
    return
  }

  const data = fs.readFileSync(jsonPath)
  let tasks = JSON.parse(data).tasks

  if (!tasks.some(task => task.id == id)) {
    console.log('There is no task with this ID')
    return
  }

  tasks = tasks.map(task =>
    task.id == id ? {...task, status: 'done', updatedAt: new Date().toISOString()} : task
  )

  fs.writeFileSync(jsonPath, JSON.stringify({tasks}, null, 2), 'utf8')
  console.log(`Task marked with "done" successfully (ID: ${id})`)
}

export default markDoneTask
