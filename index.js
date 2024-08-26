#!/usr/bin/env node

import initTasksFile from './src/utils/initTasksFile.js'
import addTask from './src/commands/addTask.js'
import deleteTask from './src/commands/deleteTask.js'
import updateTask from './src/commands/updateTask.js'
import markInProgressTask from './src/commands/markInProgressTask.js'
import markDoneTask from './src/commands/markDoneTask.js'
import listTasks from './src/commands/listTasks.js'

initTasksFile()
const args = process.argv.slice(2)

if (args.length === 0) {
  console.log('Usage: task-cli <command> [options]')
  console.log('Use "task-cli help" for a list of available commands.')
  process.exit(1)
}

const command = args[0]

switch (command) {
  case 'add': {
    const description = args[1]
    addTask(description)
    break
  }
  case 'delete': {
    const id = args[1]
    deleteTask(id)
    break
  }
  case 'update': {
    const id = args[1]
    const description = args[2]
    updateTask(id, description)
    break
  }
  case 'mark-in-progress': {
    const id = args[1]
    markInProgressTask(id)
    break
  }
  case 'mark-done': {
    const id = args[1]
    markDoneTask(id)
    break
  }
  case 'list': {
    const filter = args[1]
    listTasks(filter)
    break
  }
  case 'help':
    console.log('Available commands:')
    console.log('  add <description>          - Add a task')
    console.log('  delete <id>                - Delete task')
    console.log('  update <id> <description>  - Update task')
    console.log('  mark-in-progress <id>      - Marked task with "in-progress"')
    console.log('  mark-done <id>             - Marked task with "done"')
    console.log('  list                       - Listing all tasks')
    console.log('  list <status>              - Listing tasks by status')
    break
  default:
    console.log(`Unknown command: ${command}`)
    console.log('Use "task-cli help" for a list of available commands.')
    process.exit(1)
}
