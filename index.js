#!/usr/bin/env node

import initTasksFile from './src/utils/initTasksFile.js'
import addTask from './src/commands/addTask.js'

initTasksFile()
const args = process.argv.slice(2)

if (args.length === 0) {
  console.log('Usage: my-cli <command> [options]')
  process.exit(1)
}

const command = args[0]

switch (command) {
  case 'add': {
    const description = args[1]
    addTask(description)
    break
  }
  case 'help':
    console.log('Available commands:')
    console.log('  greet <name>  - Greets the person')
    console.log('  help         - Shows this help message')
    break
  default:
    console.log(`Unknown command: ${command}`)
    console.log('Use "task-cli help" for a list of available commands.')
    process.exit(1)
}
