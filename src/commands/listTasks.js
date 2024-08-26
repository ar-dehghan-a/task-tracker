import fs from 'fs'
import {jsonPath} from '../utils/initTasksFile.js'

const listTasks = filter => {
  const data = fs.readFileSync(jsonPath)
  let tasks = JSON.parse(data).tasks

  if (filter) tasks = tasks.filter(task => task.status == filter)

  tasks.forEach(task => {
    console.log('\n----------------')
    console.log('id: ' + task.id)
    console.log('description: ' + task.description)
    console.log('status: ' + task.status)
    console.log('createdAt: ' + new Date(task.createdAt).toLocaleString())
    if (task.updatedAt) console.log('updatedAt: ' + new Date(task.updatedAt).toLocaleString())
  })
}

export default listTasks
