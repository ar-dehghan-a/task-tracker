import fs from 'fs'
import {jsonPath} from '../utils/initTasksFile.js'

const markInProgressTask = id => {
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
    task.id == id ? {...task, status: 'in-progress', updatedAt: new Date().toISOString()} : task
  )

  fs.writeFileSync(jsonPath, JSON.stringify({tasks}, null, 2), 'utf8')
  console.log(`Task marked "in-progress" successfully (ID: ${id})`)
}

export default markInProgressTask
